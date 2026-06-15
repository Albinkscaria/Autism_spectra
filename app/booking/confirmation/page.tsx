"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BookingConfirmationContent() {
  const searchParams = useSearchParams();
  const bookingReference = searchParams.get("ref");

  const { data: appointment, isLoading } = trpc.appointment.getByReference.useQuery(
    { reference: bookingReference || "" },
    { enabled: !!bookingReference }
  );

  if (!bookingReference) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">
          No booking reference provided.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Loading booking details...</p>
      </div>
    );
  }

  if (!appointment) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Booking not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-8">
        <CheckCircle className="h-16 w-16 text-secondary-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-lg text-gray-600">
          Your appointment has been successfully booked.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Appointment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Booking Reference</h3>
            <p className="text-lg font-mono font-semibold text-primary-600">
              {appointment.bookingReference}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Save this reference number for your records.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
            <p className="text-base text-gray-900">{appointment.doctor.user.fullName}</p>
            <p className="text-base text-gray-600">{appointment.doctor.specialty}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
            <p className="text-base text-gray-900">
              {new Date(appointment.scheduledAt).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-base text-gray-900">
              {new Date(appointment.scheduledAt).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">Session Type</h3>
            <p className="text-base text-gray-900 capitalize">
              {appointment.sessionType}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-2">What's Next?</h3>
            <ul className="space-y-2 text-base text-gray-700">
              <li>• You'll receive a confirmation email at {appointment.guestEmail}</li>
              <li>• A reminder will be sent 24 hours before your appointment</li>
              <li>• The video consultation link will be included in your email</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Link href="/">
          <Button size="lg">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12"><p className="text-center text-lg text-gray-600">Loading confirmation...</p></div>}>
      <BookingConfirmationContent />
    </Suspense>
  );
}
