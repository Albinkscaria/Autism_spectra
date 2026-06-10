"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TimeSlotPickerProps {
  onSelectSlot: (date: Date, time: string) => void;
  selectedDate?: Date;
  selectedTime?: string;
}

export function TimeSlotPicker({
  onSelectSlot,
  selectedDate,
  selectedTime,
}: TimeSlotPickerProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Generate time slots (9 AM to 5 PM)
  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  return (
    <div className="space-y-6">
      {/* Date Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {dates.map((date) => (
            <Button
              key={date.toISOString()}
              variant={
                selectedDate && isSameDay(date, selectedDate) ? "default" : "outline"
              }
              onClick={() => setCurrentDate(date)}
              className="h-auto py-3 flex flex-col"
            >
              <span className="text-sm font-medium">{formatDate(date)}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Time</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {timeSlots.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              onClick={() => onSelectSlot(currentDate, time)}
              className="h-auto py-3"
            >
              {time}
            </Button>
          ))}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <Card className="p-4 bg-primary-50 border-primary-200">
          <p className="text-base text-gray-900">
            <span className="font-semibold">Selected:</span>{" "}
            {formatDate(selectedDate)} at {selectedTime}
          </p>
        </Card>
      )}
    </div>
  );
}
