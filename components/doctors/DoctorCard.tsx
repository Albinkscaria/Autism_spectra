import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  doctor: {
    id: string;
    specialty: string;
    bio: string;
    languages: string[];
    fee: number;
    rating: number;
    totalReviews: number;
    user: {
      fullName: string;
      avatarUrl: string | null;
    };
  };
  showBookButton?: boolean;
}

export function DoctorCard({ doctor, showBookButton = true }: DoctorCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="h-16 w-16 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-primary-600">
              {doctor.user.fullName.charAt(0)}
            </span>
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {doctor.user.fullName}
            </h3>
            <p className="text-base text-primary-600 font-medium mb-2">
              {doctor.specialty}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-base font-medium text-gray-900">
                  {Number(doctor.rating).toFixed(1)}
                </span>
              </div>
              <span className="text-base text-gray-600">
                ({doctor.totalReviews} reviews)
              </span>
            </div>

            {/* Languages */}
            <p className="text-base text-gray-600 mb-2">
              Languages: {doctor.languages.join(", ")}
            </p>

            {/* Fee */}
            <p className="text-lg font-semibold text-gray-900">
              ${Number(doctor.fee).toFixed(0)}/session
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-base text-gray-700 line-clamp-3">
          {doctor.bio}
        </p>
      </CardContent>

      {showBookButton && (
        <CardFooter className="p-6 pt-0">
          <Link href={`/doctors/${doctor.id}`} className="w-full">
            <Button className="w-full" size="lg">
              View Profile
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
