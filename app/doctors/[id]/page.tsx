"use client";

import { use } from "react";
import Link from "next/link";
import { Star, Calendar, Languages, DollarSign } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: doctor, isLoading } = trpc.doctor.getById.useQuery({ id });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Loading doctor profile...</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Doctor not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-6 mb-6">
          {/* Avatar */}
          <div className="h-24 w-24 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-4xl font-semibold text-primary-600">
              {doctor.user.fullName.charAt(0)}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {doctor.user.fullName}
            </h1>
            <p className="text-xl text-primary-600 font-medium mb-4">
              {doctor.specialty}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-lg font-medium text-gray-900">
                  {Number(doctor.rating).toFixed(1)}
                </span>
              </div>
              <span className="text-base text-gray-600">
                ({doctor.totalReviews} reviews)
              </span>
            </div>

            {/* Book Button */}
            <Link href={`/doctors/${doctor.id}/book`}>
              <Button size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-gray-700 leading-relaxed">
                {doctor.bio}
              </p>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {doctor.reviews && doctor.reviews.length > 0 ? (
                <div className="space-y-4">
                  {doctor.reviews.map((review: { id: string; rating: number; createdAt: string; comment?: string }) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      {review.comment && (
                        <p className="text-base text-gray-700">{review.comment}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-base text-gray-600">No reviews yet.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Details Card */}
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Fee */}
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Session Fee</p>
                  <p className="text-base text-gray-700">
                    ${Number(doctor.fee).toFixed(0)} per session
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-3">
                <Languages className="h-5 w-5 text-primary-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Languages</p>
                  <p className="text-base text-gray-700">
                    {doctor.languages.join(", ")}
                  </p>
                </div>
              </div>

              {/* License */}
              <div className="flex items-start gap-3">
                <div className="h-5 w-5 flex items-center justify-center">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">License</p>
                  <p className="text-base text-gray-700">{doctor.licenseNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
