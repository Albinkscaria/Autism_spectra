import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@auticare.com' },
    update: {},
    create: {
      email: 'admin@auticare.com',
      fullName: 'Admin User',
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('✅ Admin user created');

  // Create doctor users and profiles
  const doctorData = [
    {
      email: 'dr.sarah.johnson@auticare.com',
      fullName: 'Dr. Sarah Johnson',
      specialty: 'ABA Therapist',
      licenseNumber: 'ABA-12345',
      bio: 'Board Certified Behavior Analyst with 10+ years of experience working with children and adults on the autism spectrum. Specializes in early intervention and skill development.',
      languages: ['English', 'Spanish'],
      fee: 150.00,
      rating: 4.9,
      totalReviews: 47,
    },
    {
      email: 'dr.michael.chen@auticare.com',
      fullName: 'Dr. Michael Chen',
      specialty: 'Child Psychiatrist',
      licenseNumber: 'PSY-67890',
      bio: 'Child and adolescent psychiatrist specializing in autism spectrum disorders, ADHD, and anxiety. Focuses on medication management and holistic care approaches.',
      languages: ['English', 'Mandarin'],
      fee: 200.00,
      rating: 4.8,
      totalReviews: 62,
    },
    {
      email: 'dr.emily.rodriguez@auticare.com',
      fullName: 'Dr. Emily Rodriguez',
      specialty: 'Speech Therapist',
      licenseNumber: 'SLP-11223',
      bio: 'Licensed Speech-Language Pathologist with expertise in communication disorders, AAC devices, and social communication skills for individuals with autism.',
      languages: ['English', 'Spanish', 'Portuguese'],
      fee: 120.00,
      rating: 5.0,
      totalReviews: 38,
    },
    {
      email: 'dr.james.williams@auticare.com',
      fullName: 'Dr. James Williams',
      specialty: 'Occupational Therapist',
      licenseNumber: 'OT-44556',
      bio: 'Occupational therapist specializing in sensory integration, fine motor skills, and daily living activities for children and adults with autism.',
      languages: ['English'],
      fee: 130.00,
      rating: 4.7,
      totalReviews: 29,
    },
    {
      email: 'dr.lisa.patel@auticare.com',
      fullName: 'Dr. Lisa Patel',
      specialty: 'Developmental Pediatrician',
      licenseNumber: 'MD-78901',
      bio: 'Developmental pediatrician with focus on autism diagnosis, developmental assessments, and coordinating comprehensive care plans for families.',
      languages: ['English', 'Hindi', 'Gujarati'],
      fee: 180.00,
      rating: 4.9,
      totalReviews: 54,
    },
  ];

  for (const doctor of doctorData) {
    const user = await prisma.user.upsert({
      where: { email: doctor.email },
      update: {},
      create: {
        email: doctor.email,
        fullName: doctor.fullName,
        role: 'DOCTOR',
        isActive: true,
      },
    });

    await prisma.doctorProfile.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        specialty: doctor.specialty,
        licenseNumber: doctor.licenseNumber,
        bio: doctor.bio,
        languages: doctor.languages,
        fee: doctor.fee,
        isApproved: true,
        rating: doctor.rating,
        totalReviews: doctor.totalReviews,
        availabilityJson: {
          monday: [{ start: '09:00', end: '17:00' }],
          tuesday: [{ start: '09:00', end: '17:00' }],
          wednesday: [{ start: '09:00', end: '17:00' }],
          thursday: [{ start: '09:00', end: '17:00' }],
          friday: [{ start: '09:00', end: '15:00' }],
        },
      },
    });
  }

  console.log('✅ Doctor profiles created');

  // Create blog posts
  const blogCategories = [
    'Research',
    'Parenting Tips',
    'Personal Stories',
    'Therapist Insights',
    'Legal & Rights',
    'School & Education',
    'Adult Autism',
    'Tools & Technology',
  ];

  const blogPosts = [
    {
      title: 'Understanding Sensory Processing in Autism',
      slug: 'understanding-sensory-processing-autism',
      content: 'Sensory processing differences are common in individuals with autism. This article explores how sensory sensitivities affect daily life and provides practical strategies for managing sensory overload...',
      category: 'Therapist Insights',
      tags: ['sensory', 'coping strategies', 'daily life'],
      readTimeMins: 8,
    },
    {
      title: 'Early Signs of Autism: What Parents Should Know',
      slug: 'early-signs-autism-parents',
      content: 'Recognizing early signs of autism can lead to earlier intervention and support. Learn about developmental milestones and when to seek professional evaluation...',
      category: 'Parenting Tips',
      tags: ['early intervention', 'diagnosis', 'development'],
      readTimeMins: 6,
    },
    {
      title: 'Creating Visual Schedules for Daily Routines',
      slug: 'creating-visual-schedules-daily-routines',
      content: 'Visual schedules are powerful tools for helping individuals with autism understand and navigate daily routines. This guide shows you how to create effective visual supports...',
      category: 'Tools & Technology',
      tags: ['visual supports', 'routines', 'organization'],
      readTimeMins: 5,
    },
    {
      title: 'Navigating IEP Meetings: A Parent\'s Guide',
      slug: 'navigating-iep-meetings-parents-guide',
      content: 'IEP meetings can feel overwhelming. This comprehensive guide helps parents prepare, advocate effectively, and ensure their child receives appropriate educational support...',
      category: 'School & Education',
      tags: ['IEP', 'education', 'advocacy'],
      readTimeMins: 10,
    },
    {
      title: 'My Journey: Diagnosed with Autism at 30',
      slug: 'my-journey-diagnosed-autism-30',
      content: 'A personal story about receiving an autism diagnosis in adulthood and how it brought clarity, self-understanding, and connection to the autism community...',
      category: 'Personal Stories',
      tags: ['adult diagnosis', 'personal experience', 'identity'],
      readTimeMins: 7,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        ...post,
        authorId: admin.id,
        status: 'published',
        publishedAt: new Date(),
        likesCount: Math.floor(Math.random() * 100),
      },
    });
  }

  console.log('✅ Blog posts created');

  // Create community groups
  const communityGroups = [
    {
      name: 'Parents of Autistic Children',
      type: 'support',
      description: 'A supportive community for parents raising children on the autism spectrum. Share experiences, ask questions, and connect with others who understand.',
      memberCount: 1247,
    },
    {
      name: 'Autistic Adults',
      type: 'support',
      description: 'A space for autistic adults to connect, share experiences, and support each other. All voices welcome.',
      memberCount: 892,
    },
    {
      name: 'Newly Diagnosed',
      type: 'support',
      description: 'Support and guidance for individuals and families navigating a recent autism diagnosis.',
      memberCount: 456,
    },
    {
      name: 'Caregivers',
      type: 'support',
      description: 'For family members, friends, and professional caregivers supporting individuals with autism.',
      memberCount: 634,
    },
    {
      name: 'Educators',
      type: 'professional',
      description: 'Teachers and education professionals sharing strategies and resources for supporting autistic students.',
      memberCount: 523,
    },
  ];

  for (const group of communityGroups) {
    await prisma.communityGroup.upsert({
      where: { id: group.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
        id: group.name.toLowerCase().replace(/\s+/g, '-'),
        ...group,
      },
    });
  }

  console.log('✅ Community groups created');

  // Create resources
  const resources = [
    {
      title: 'Visual Schedule Template - Morning Routine',
      category: 'Visual Schedules',
      fileUrl: '/resources/visual-schedule-morning.pdf',
      description: 'Printable visual schedule template for morning routines with customizable picture cards.',
    },
    {
      title: 'AAC Communication Board - Basic Needs',
      category: 'Communication Boards',
      fileUrl: '/resources/aac-basic-needs.pdf',
      description: 'Communication board with symbols for expressing basic needs like hunger, thirst, bathroom, and rest.',
    },
    {
      title: 'Social Story: Going to the Doctor',
      category: 'Social Stories',
      fileUrl: '/resources/social-story-doctor.pdf',
      description: 'Social story to prepare for doctor visits, explaining what to expect and how to cope.',
    },
    {
      title: 'IEP Goal Bank - Communication Skills',
      category: 'IEP Resources',
      fileUrl: '/resources/iep-goals-communication.pdf',
      description: 'Sample IEP goals for communication and language development.',
    },
    {
      title: 'Sensory Diet Activities Guide',
      category: 'Sensory Support',
      fileUrl: '/resources/sensory-diet-guide.pdf',
      description: 'Collection of sensory activities to help with regulation throughout the day.',
    },
    {
      title: 'Autism Rights and Legal Protections',
      category: 'Legal Resources',
      fileUrl: '/resources/autism-legal-rights.pdf',
      description: 'Overview of legal rights and protections for individuals with autism in education and employment.',
    },
  ];

  for (const resource of resources) {
    await prisma.resource.create({
      data: resource,
    });
  }

  console.log('✅ Resources created');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
