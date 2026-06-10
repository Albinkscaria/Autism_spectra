'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Star, Clock, CheckCircle, Users, FileCheck, Globe, Home, ChevronRight } from 'lucide-react';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/home/Footer';

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.08 * i, duration: 0.6 } }),
};

const stepFade = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.2 * i, duration: 0.6 } }),
};

const mockDoctors = [
  {
    id: '1',
    name: 'Dr. Ayesha Khan',
    title: 'Licensed Speech Therapist',
    specialty: 'Speech Therapy',
    specialtyColor: 'teal',
    bio: 'Expert in speech and language disorders with 12+ years of experience. Specializes in articulation, fluency, and voice disorders.',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    sessions: 287,
    reviews: 127,
    fee: 150,
    availability: 'Available this week',
    image: '👩‍⚕️',
  },
  {
    id: '2',
    name: 'Dr. Marcus Johnson',
    title: 'Autism Spectrum Specialist',
    specialty: 'Autism Care',
    specialtyColor: 'purple',
    bio: 'Board-certified behavioral analyst with 15+ years working with children and adults on the spectrum.',
    languages: ['English', 'French'],
    rating: 5.0,
    sessions: 421,
    reviews: 194,
    fee: 180,
    availability: 'Available today',
    image: '👨‍⚕️',
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    title: 'Clinical Psychologist',
    specialty: 'Mental Health',
    specialtyColor: 'blue',
    bio: 'Specialized in anxiety, depression, and trauma therapy. Compassionate approach to mental wellness.',
    languages: ['English', 'Spanish'],
    rating: 4.8,
    sessions: 356,
    reviews: 162,
    fee: 170,
    availability: 'Available today',
    image: '👩‍⚕️',
  },
  {
    id: '4',
    name: 'Dr. Hiroshi Tanaka',
    title: 'Speech Therapist',
    specialty: 'Speech Therapy',
    specialtyColor: 'teal',
    bio: 'Fluent in 4 languages. Expertise in accent reduction and multilingual language development.',
    languages: ['English', 'Japanese', 'Korean', 'Mandarin'],
    rating: 4.7,
    sessions: 198,
    reviews: 82,
    fee: 140,
    availability: 'Available tomorrow',
    image: '👨‍⚕️',
  },
  {
    id: '5',
    name: 'Dr. Sarah Mitchell',
    title: 'Behavioral Therapist',
    specialty: 'Autism Care',
    specialtyColor: 'purple',
    bio: 'Specialized in ABA therapy and social skills training. Dedicated to building confidence and independence.',
    languages: ['English'],
    rating: 4.9,
    sessions: 312,
    reviews: 103,
    fee: 160,
    availability: 'Available today',
    image: '👩‍⚕️',
  },
  {
    id: '6',
    name: 'Dr. Michael Chen',
    title: 'Child Psychiatrist',
    specialty: 'Mental Health',
    specialtyColor: 'blue',
    bio: 'Expertise in child development and family dynamics. Creates personalized care plans for each client.',
    languages: ['English', 'Mandarin'],
    rating: 4.8,
    sessions: 267,
    reviews: 71,
    fee: 190,
    availability: 'Available this week',
    image: '👨‍⚕️',
  },
];

const trustSignals = [
  { icon: CheckCircle, label: '100% Licensed & Verified', subtext: 'All credentials verified' },
  { icon: FileCheck, label: 'Background Checked', subtext: 'Full background screening' },
  { icon: Globe, label: 'Multilingual Therapists', subtext: '15+ languages available' },
  { icon: Clock, label: 'Flexible Online Sessions', subtext: 'Schedule that works for you' },
];

const steps = [
  { number: '1', icon: Users, title: 'Tell us your needs', description: 'Share your goals and preferences' },
  { number: '2', icon: Search, title: 'Browse matched therapists', description: 'Find your perfect fit' },
  { number: '3', icon: CheckCircle, title: 'Book your first session', description: 'Start your journey today' },
];

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Speech Therapy', 'Autism Care', 'Mental Health'];

  const filteredDoctors = mockDoctors.filter((doctor) => {
    const matchesFilter = activeFilter === 'All' || doctor.specialty === activeFilter;
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const specialtyColors = {
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
  };

  const featuredDoctor = mockDoctors[1];

  return (
    <div className="bg-white text-slate-900">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-slate-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="flex items-center gap-1 text-teal-700 hover:text-teal-800">
              <Home size={16} />
              Home
            </Link>
            <ChevronRight size={16} />
            <span className="font-medium text-slate-900">Find a Therapist</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
        className="relative overflow-hidden bg-linear-to-br from-teal-50 via-white to-emerald-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-emerald-100/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Meet Our Certified Therapists
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Every Speelan therapist is licensed, verified, and passionate about transforming lives through personalized care.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-900 placeholder-slate-500 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Filter Bar */}
      <motion.div
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-shadow"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-200'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Doctors Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardFade}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100"
              >
                {/* Card hover lift effect */}
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50/0 to-teal-50/0 transition-all duration-500 group-hover:from-teal-50 group-hover:to-emerald-50/30" />

                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <div className="relative h-24 w-24 rounded-full border-4 border-teal-300 bg-teal-50 flex items-center justify-center text-4xl shadow-md shadow-teal-100">
                    {doctor.image}
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-center text-xl font-semibold text-slate-900">{doctor.name}</h3>
                <p className="text-center text-sm text-slate-600">{doctor.title}</p>

                {/* Specialty Badge */}
                <div className="mt-4 flex justify-center">
                  <span className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${specialtyColors[doctor.specialtyColor as keyof typeof specialtyColors]}`}>
                    {doctor.specialty}
                  </span>
                </div>

                {/* Rating & Sessions */}
                <div className="mt-4 flex items-center justify-center gap-1 text-sm text-slate-600">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-900">{doctor.rating}</span>
                  <span>• {doctor.sessions} sessions</span>
                </div>

                {/* Bio */}
                <p className="mt-4 text-center text-sm leading-relaxed text-slate-600">{doctor.bio}</p>

                {/* Availability */}
                <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-50 py-2 px-3">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-green-700">{doctor.availability}</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-xl border-2 border-teal-700 bg-white py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-50">
                    View Profile
                  </button>
                  <button className="flex-1 rounded-xl bg-teal-700 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-200">
                    Book Session
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credentials Strip */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
        className="border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
                  <signal.icon className="text-teal-700" size={24} />
                </div>
                <h4 className="font-semibold text-slate-900">{signal.label}</h4>
                <p className="mt-1 text-sm text-slate-600">{signal.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Therapist Spotlight */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-4xl bg-linear-to-br from-teal-50 to-emerald-50 shadow-xl">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
              {/* Left: Photo */}
              <div className="flex items-center justify-center overflow-hidden p-8 md:p-12">
                <div className="relative h-80 w-80 rounded-4xl border-8 border-white bg-teal-100 shadow-2xl flex items-center justify-center text-9xl">
                  {featuredDoctor.image}
                </div>
              </div>

              {/* Right: Info */}
              <div className="space-y-6 p-8 md:p-12">
                <div>
                  <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    Featured Specialist
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">{featuredDoctor.name}</h3>
                  <p className="mt-2 text-lg text-slate-600">{featuredDoctor.title}</p>
                </div>

                <p className="text-lg leading-relaxed text-slate-600">{featuredDoctor.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {['Communication Skills', 'Behavioral Support', 'Family Coaching'].map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Availability Badge & CTA */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 px-4 py-2.5 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm font-semibold text-green-700">Available this week</span>
                  </div>
                  <button className="rounded-xl bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-200">
                    Book a Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How to Get Matched Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
        className="border-y border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">How to Get Matched</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Finding the right therapist is just a few steps away.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stepFade}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-1 w-full translate-x-1/2 bg-linear-to-r from-teal-300 to-emerald-300 md:block" />
                )}

                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-700 text-2xl font-bold text-white shadow-lg shadow-teal-200">
                  {step.number}
                </div>

                <div className="mt-4">
                  <step.icon className="mx-auto mb-3 text-teal-700" size={32} />
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Banner */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
        className="bg-linear-to-r from-teal-600 to-emerald-500 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Not sure which therapist is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
            Answer a few quick questions and we'll find your perfect match based on your needs, preferences, and schedule.
          </p>
          <button className="mt-8 rounded-xl bg-white px-10 py-4 text-lg font-semibold text-teal-700 transition hover:bg-slate-100 hover:shadow-xl">
            Find My Therapist
          </button>
        </div>
      </motion.section>

      {/* Search Bar Section */}
      <section style={{
        background: 'white',
        padding: '32px 80px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ position: 'relative', maxWidth: '600px' }}>
            <Search 
              size={20} 
              style={{ 
                position: 'absolute', 
                left: '20px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#718096',
              }} 
            />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 52px',
                fontSize: '16px',
                border: '2px solid #E2EBF6',
                borderRadius: '50px',
                outline: 'none',
                transition: 'border-color 200ms',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#4A90D9'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#E2EBF6'}
            />
          </div>
          <p style={{ 
            marginTop: '16px', 
            fontSize: '15px', 
            color: '#718096',
          }}>
            Showing {filteredDoctors.length} specialist{filteredDoctors.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section style={{ padding: '60px 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '32px',
          }}>
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(74, 144, 217, 0.08)',
                  transition: 'transform 200ms, box-shadow 200ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(74, 144, 217, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(74, 144, 217, 0.08)';
                }}
              >
                {/* Doctor Header */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  {/* Avatar */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4A90D9, #5BBF8E)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'white',
                    flexShrink: 0,
                  }}>
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Name and Credentials */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#2D3748',
                      marginBottom: '4px',
                    }}>
                      {doctor.name}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#718096',
                      marginBottom: '8px',
                    }}>
                      {doctor.title}
                    </p>
                    <div style={{
                      background: '#EBF5FF',
                      color: '#4A90D9',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '13px',
                      fontWeight: 600,
                      display: 'inline-block',
                    }}>
                      {doctor.specialty}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p style={{
                  fontSize: '15px',
                  color: '#718096',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                }}>
                  {doctor.bio}
                </p>

                {/* Languages */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '14px', color: '#2D3748', fontWeight: 600, marginBottom: '8px' }}>
                    Languages:
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {doctor.languages.map((lang) => (
                      <span
                        key={lang}
                        style={{
                          background: '#F5FFF8',
                          color: '#5BBF8E',
                          padding: '4px 12px',
                          borderRadius: '50px',
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating and Fee */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingTop: '16px',
                  borderTop: '1px solid #E2EBF6',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={18} fill="#FFD700" color="#FFD700" />
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#2D3748' }}>
                      {doctor.rating}
                    </span>
                    <span style={{ fontSize: '14px', color: '#718096' }}>
                      ({doctor.reviews} reviews)
                    </span>
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#4A90D9' }}>
                    ${doctor.fee}/session
                  </div>
                </div>

                {/* Book Button */}
                <Link href={`/doctors/${doctor.id}`} style={{ textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    background: '#4A90D9',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 150ms, box-shadow 150ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(74,144,217,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    Book Appointment
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDoctors.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'white',
              borderRadius: '20px',
            }}>
              <p style={{ fontSize: '18px', color: '#718096' }}>
                No specialists found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
