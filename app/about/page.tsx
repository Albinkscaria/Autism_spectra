'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const cardFade = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.1 * i, duration: 0.6 } }),
};

const stats = [
  { label: '3 Therapy Disciplines', value: 'Speech, Autism, Mental Health' },
  { label: '1-on-1 Certified Sessions', value: 'Licensed experts available' },
  { label: 'Global Reach', value: 'Scaling care for families worldwide' },
];

const services = [
  {
    title: 'Speech Therapy',
    description: 'Empowering communication with tailored speech and language support.',
    icon: '🗣️',
  },
  {
    title: 'Autism Care',
    description: 'Structured routines and sensory-aware guidance for every stage.',
    icon: '🤝',
  },
  {
    title: 'Mental Health',
    description: 'Compassionate therapy for wellbeing, confidence, and resilience.',
    icon: '🌿',
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-teal-100 via-white to-white opacity-80" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="relative overflow-hidden rounded-4xl border border-teal-100 bg-white/90 p-10 shadow-[0_50px_120px_rgba(29,158,117,0.08)] sm:p-16"
        >
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-teal-200/60 blur-3xl" />
          <div className="absolute right-0 top-24 h-28 w-28 rounded-full bg-emerald-100/80 blur-3xl" />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <span className="rounded-full border border-teal-100 bg-teal-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">
              About Speelan
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Transforming the Future of Therapy
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Making speech therapy, autism care, and mental health services more accessible, connected, and effective.
              </p>
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-teal-100 bg-teal-50/90 px-5 py-6 shadow-sm">
                <p className="text-3xl font-semibold text-teal-700">3x</p>
                <p className="mt-2 text-sm text-slate-600">Therapy disciplines</p>
              </div>
              <div className="rounded-3xl border border-teal-100 bg-slate-50 px-5 py-6 shadow-sm">
                <p className="text-3xl font-semibold text-teal-700">1-on-1</p>
                <p className="mt-2 text-sm text-slate-600">Certified sessions</p>
              </div>
              <div className="rounded-3xl border border-teal-100 bg-teal-50/90 px-5 py-6 shadow-sm">
                <p className="text-3xl font-semibold text-teal-700">Global</p>
                <p className="mt-2 text-sm text-slate-600">Reach and support</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mt-16 rounded-4xl bg-teal-50 px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16"
        >
          <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-800 sm:text-2xl">
            We provide an integrated ecosystem that supports children and adults through structured tools, guided programs, and one-on-one sessions with certified and licensed therapists across speech therapy, autism care, and mental health.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">What We Do</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Therapy services designed for real people.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardFade}
                className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-transform duration-500 hover:-translate-y-2 hover:border-teal-200 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-teal-100 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-full bg-linear-to-r from-teal-300 via-teal-400 to-emerald-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mt-20 rounded-4xl bg-slate-50 p-8 shadow-sm sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">How Speelan Connects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A seamless network for families, therapists, and clinics.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Speelan bridges the gap between individuals, parents, therapists, and clinics, making therapy more accessible through technology-driven solutions.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-4xl border border-teal-100 bg-white p-8 shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,158,117,0.12),transparent_35%)]" />
              <div className="relative grid gap-6">
                {['Individuals', 'Parents', 'Therapists', 'Clinics'].map((label, idx) => (
                  <div key={label} className="flex items-center gap-4 rounded-3xl bg-slate-50 px-5 py-4 shadow-sm">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-700 text-lg font-semibold">
                      {idx + 1}
                    </span>
                    <span className="text-base font-semibold text-slate-900">{label}</span>
                  </div>
                ))}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="pointer-events-none absolute left-8 top-24 h-px w-[calc(100%-4rem)] origin-left bg-linear-to-r from-teal-300 via-teal-400 to-emerald-300"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">Vision & Scale</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built to support therapy at scale with care and clarity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              With the growing global demand for specialized therapy, Speelan is positioned to become a trusted, scalable platform for holistic therapy support worldwide.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="rounded-4xl border border-slate-200 bg-white p-7 text-center shadow-sm"
              >
                <p className="text-xl font-semibold text-teal-700">{stat.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="mt-20 rounded-4xl bg-teal-700 px-8 py-14 text-center text-white shadow-[0_30px_90px_rgba(29,158,117,0.16)] sm:px-14"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-base font-semibold uppercase tracking-[0.3em] text-teal-200">Ready to experience Speelan?</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Join families, therapists, and clinics already benefiting from connected care.
            </h2>
            <Link href="/doctors" className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-teal-50">
              Explore services
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
