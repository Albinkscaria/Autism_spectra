"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DoctorSearchFiltersProps {
  specialties: string[];
  languages: string[];
  onFilterChange: (filters: {
    specialty?: string;
    minFee?: number;
    maxFee?: number;
    language?: string;
  }) => void;
}

export function DoctorSearchFilters({
  specialties,
  languages,
  onFilterChange,
}: DoctorSearchFiltersProps) {
  const [specialty, setSpecialty] = useState("");
  const [minFee, setMinFee] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [language, setLanguage] = useState("");

  const handleApplyFilters = () => {
    onFilterChange({
      specialty: specialty || undefined,
      minFee: minFee ? Number(minFee) : undefined,
      maxFee: maxFee ? Number(maxFee) : undefined,
      language: language || undefined,
    });
  };

  const handleClearFilters = () => {
    setSpecialty("");
    setMinFee("");
    setMaxFee("");
    setLanguage("");
    onFilterChange({});
  };

  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-gray-900">Filter Doctors</h2>

      {/* Specialty */}
      <div className="space-y-2">
        <Label htmlFor="specialty">Specialty</Label>
        <select
          id="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="flex h-11 w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <option value="">All Specialties</option>
          {specialties.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Language */}
      <div className="space-y-2">
        <Label htmlFor="language">Language</Label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="flex h-11 w-full rounded-md border-2 border-gray-300 bg-white px-4 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <option value="">All Languages</option>
          {languages.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      {/* Fee Range */}
      <div className="space-y-2">
        <Label>Fee Range</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Min"
              value={minFee}
              onChange={(e) => setMinFee(e.target.value)}
              min="0"
            />
          </div>
          <span className="flex items-center text-gray-500">to</span>
          <div className="flex-1">
            <Input
              type="number"
              placeholder="Max"
              value={maxFee}
              onChange={(e) => setMaxFee(e.target.value)}
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button onClick={handleApplyFilters} className="flex-1">
          Apply Filters
        </Button>
        <Button onClick={handleClearFilters} variant="outline" className="flex-1">
          Clear
        </Button>
      </div>
    </div>
  );
}
