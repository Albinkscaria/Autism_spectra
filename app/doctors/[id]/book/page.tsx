"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingSteps } from "@/components/booking/BookingSteps";
import { TimeSlotPicker } from "@/components/booking/TimeSlotPicker";

export default function BookAppointmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    reason: "",
    sessionType: "video" as "video" | "chat",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { data: doctor } = trpc.doctor.getById.useQuery({ id });
  const createAppointment = trpc.appointment.create.useMutation();
  const createCheckoutSession = trpc.appointment.createCheckoutSession.useMutation();

  const steps = ["Select Time", "Your Details", "Session Type", "Confirm"];

  const handleSelectSlot = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!selectedDate || !selectedTime) {
        newErrors.slot = "Please select a date and time";
      }
    } else if (step === 1) {
      if (!formData.guestName || formData.guestName.length < 2) {
        newErrors.guestName = "Name must be at least 2 characters";
      }
      if (!formData.guestEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guestEmail)) {
        newErrors.guestEmail = "Please enter a valid email";
      }
      if (!formData.guestPhone || !/^\+?[1-9]\d{1,14}$/.test(formData.guestPhone)) {
        newErrors.guestPhone = "Please enter a valid phone number";
      }
      if (!formData.reason || formData.reason.length < 10) {
        newErrors.reason = "Please provide at least 10 characters describing your concern";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !doctor) return;

    try {
      const [hours, minutes] = selectedTime.split(":").map(Number);
      const scheduledAt = new Date(selectedDate);
      scheduledAt.setHours(hours, minutes, 0, 0);

      // Create appointment
      const appointment = await createAppointment.mutateAsync({
        doctorId: doctor.id,
        ...formData,
        scheduledAt,
      });

      // Create Stripe checkout session
      const checkoutSession = await createCheckoutSession.mutateAsync({
        appointmentId: appointment.id,
      });

      // Redirect to Stripe checkout
      if (checkoutSession.url) {
        window.location.href = checkoutSession.url;
      } else {
        // Fallback: redirect to confirmation if no payment needed
        router.push(`/booking/confirmation?ref=${appointment.bookingReference}`);
      }
    } catch (error) {
      console.error("Booking error:", error);
      setErrors({ submit: "Failed to create booking. Please try again." });
    }
  };

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Book Appointment
        </h1>
        <p className="text-lg text-gray-600">
          with {doctor.user.fullName} - {doctor.specialty}
        </p>
      </div>

      <BookingSteps currentStep={currentStep} steps={steps} />

      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep]}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Step 0: Select Time */}
          {currentStep === 0 && (
            <div className="space-y-4">
              <TimeSlotPicker
                onSelectSlot={handleSelectSlot}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
              {errors.slot && (
                <p className="text-sm text-red-600">{errors.slot}</p>
              )}
            </div>
          )}

          {/* Step 1: Your Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="guestName">Full Name</Label>
                <Input
                  id="guestName"
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData({ ...formData, guestName: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
                {errors.guestName && (
                  <p className="text-sm text-red-600">{errors.guestName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="guestEmail">Email</Label>
                <Input
                  id="guestEmail"
                  type="email"
                  value={formData.guestEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, guestEmail: e.target.value })
                  }
                  placeholder="your.email@example.com"
                />
                {errors.guestEmail && (
                  <p className="text-sm text-red-600">{errors.guestEmail}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="guestPhone">Phone Number</Label>
                <Input
                  id="guestPhone"
                  type="tel"
                  value={formData.guestPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, guestPhone: e.target.value })
                  }
                  placeholder="+1234567890"
                />
                {errors.guestPhone && (
                  <p className="text-sm text-red-600">{errors.guestPhone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Consultation</Label>
                <textarea
                  id="reason"
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  placeholder="Please describe your concern or reason for booking..."
                  className="flex min-h-[120px] w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                />
                {errors.reason && (
                  <p className="text-sm text-red-600">{errors.reason}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Session Type */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-base text-gray-600 mb-4">
                Choose how you'd like to have your consultation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, sessionType: "video" })}
                  className={`p-6 rounded-lg border-2 text-left transition-colors ${
                    formData.sessionType === "video"
                      ? "border-primary-600 bg-primary-50"
                      : "border-gray-300 hover:border-primary-300"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Video Call
                  </h3>
                  <p className="text-base text-gray-600">
                    Face-to-face consultation via video
                  </p>
                </button>

                <button
                  onClick={() => setFormData({ ...formData, sessionType: "chat" })}
                  className={`p-6 rounded-lg border-2 text-left transition-colors ${
                    formData.sessionType === "chat"
                      ? "border-primary-600 bg-primary-50"
                      : "border-gray-300 hover:border-primary-300"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Chat Only
                  </h3>
                  <p className="text-base text-gray-600">
                    Text-based consultation
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirm */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
                  <p className="text-base text-gray-900">{doctor.user.fullName}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                  <p className="text-base text-gray-900">
                    {selectedDate?.toLocaleDateString()} at {selectedTime}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Your Details</h3>
                  <p className="text-base text-gray-900">{formData.guestName}</p>
                  <p className="text-base text-gray-600">{formData.guestEmail}</p>
                  <p className="text-base text-gray-600">{formData.guestPhone}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Session Type</h3>
                  <p className="text-base text-gray-900 capitalize">
                    {formData.sessionType}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Fee</h3>
                  <p className="text-lg font-semibold text-gray-900">
                    ${Number(doctor.fee).toFixed(0)}
                  </p>
                </div>
              </div>

              {errors.submit && (
                <p className="text-sm text-red-600">{errors.submit}</p>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 0 && (
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Back
              </Button>
            )}
            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} className="flex-1">
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={createAppointment.isPending}
                className="flex-1"
              >
                {createAppointment.isPending ? "Booking..." : "Confirm & Pay"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
