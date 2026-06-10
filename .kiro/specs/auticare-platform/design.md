# Design Document: AutiCare Platform

## Overview

AutiCare is a comprehensive web platform designed to support individuals with autism, their families, and medical professionals. The platform provides doctor search and booking, video consultations, autism-friendly games, educational content, community support, resource libraries, and an AI assistant.

This design document outlines the technical architecture, component structure, data models, and implementation strategy for the AutiCare platform. The current build stage focuses on anonymous visitor access without authentication, guest booking flows, and foundational features.

### Key Design Principles

1. **Sensory-Friendly First**: All UI components prioritize accessibility and sensory comfort
2. **Type Safety**: Strict TypeScript with end-to-end type safety via tRPC
3. **Progressive Enhancement**: Core functionality works without JavaScript where possible
4. **Performance**: Fast page loads with optimized assets and lazy loading
5. **Scalability**: Architecture supports future authentication and advanced features
6. **Simplicity**: Clear, uncluttered interfaces with one primary task per screen

### Technology Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript (strict mode)
- **Styling**: Tailwind CSS, shadcn/ui component library
- **State Management**: Zustand for global state, React Query for server state
- **API Layer**: tRPC for type-safe client-server communication
- **Database**: Supabase PostgreSQL with Prisma ORM
- **Storage**: Supabase Storage for files and media
- **Authentication**: Passphrase-based admin access (no Supabase Auth in current build)
- **Payments**: Stripe Checkout
- **Video**: Daily.co embedded video SDK
- **Email**: Resend for transactional emails
- **AI**: Anthropic Claude API (claude-sonnet-4-20250514)
- **Deployment**: Vercel (frontend/API) + Supabase Cloud (backend)

## Architecture

### System Architecture

The AutiCare platform follows a modern full-stack architecture with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  Next.js 14 App Router + React Components + Zustand         │
│  (Browser: localStorage, sessionStorage for guest data)     │
└────────────────────┬────────────────────────────────────────┘
                     │ tRPC (Type-safe API calls)
┌────────────────────▼────────────────────────────────────────┐
│                     API Layer (Next.js)                      │
│  tRPC Routers + Zod Validation + Business Logic             │
└─┬──────────┬──────────┬──────────┬──────────┬──────────────┘
  │          │          │          │          │
  │ Supabase │ Stripe   │ Daily.co │ Resend   │ Claude API
  │ Client   │ SDK      │ SDK      │ SDK      │ SDK
  │          │          │          │          │
┌─▼──────────▼──────────▼──────────▼──────────▼──────────────┐
│                   External Services                          │
│  PostgreSQL | Storage | Payments | Video | Email | AI       │
└─────────────────────────────────────────────────────────────┘
```

### Architecture Layers

**1. Presentation Layer (Client)**
- Next.js App Router pages and layouts
- React Server Components for initial page loads
- Client Components for interactive features
- Zustand stores for client-side state (games, preferences)
- localStorage for guest data persistence (game progress, preferences)
- sessionStorage for temporary data (Aura chat history)

**2. API Layer (Server)**
- tRPC routers organized by domain (doctors, appointments, games, etc.)
- Zod schemas for request/response validation
- Business logic and data transformation
- Integration with external services
- Rate limiting and security middleware

**3. Data Layer**
- Supabase PostgreSQL database
- Prisma ORM for type-safe database queries
- Supabase Storage for file uploads
- Database migrations and seeding

**4. Integration Layer**
- Stripe for payment processing
- Daily.co for video consultations
- Resend for email notifications
- Claude API for AI assistant
- All integrations wrapped in service modules

### Key Architectural Decisions

**Decision 1: No Authentication in Current Build**
- Rationale: Simplifies initial launch, reduces friction for visitors
- Implementation: Guest booking with email-based identification, admin passphrase access
- Future: Will add Supabase Auth for user accounts in next phase

**Decision 2: tRPC for API Communication**
- Rationale: End-to-end type safety, automatic API client generation, better DX
- Implementation: Domain-based router organization, shared Zod schemas
- Alternative considered: REST API (rejected due to lack of type safety)

**Decision 3: localStorage for Guest Data**
- Rationale: No backend storage needed for anonymous users, instant persistence
- Implementation: Game progress, preferences, badges stored locally
- Limitation: Data lost if browser storage cleared (acceptable for MVP)

**Decision 4: Passphrase Admin Access**
- Rationale: Simple, no auth system needed for single admin in MVP
- Implementation: Environment variable passphrase, HTTP-only cookie session
- Future: Will migrate to proper role-based auth

**Decision 5: Monorepo Structure**
- Rationale: Single deployment, shared types, simplified development
- Implementation: All code in single Next.js project
- Structure: `/app` (pages), `/components`, `/lib` (utilities), `/server` (tRPC)

### Data Flow Patterns

**Guest Booking Flow**
```
User selects doctor/time → Client validates input → tRPC mutation →
Server creates appointment → Stripe checkout → Payment webhook →
Update appointment status → Send confirmation email → Return booking reference
```

**Game Progress Flow**
```
User plays game → Client updates state → Save to localStorage →
Award badges if milestones reached → Update UI with progress
```

**AI Chat Flow**
```
User sends message → tRPC mutation with context → Claude API call →
Stream response back → Display in chat UI → Store in sessionStorage
```

**Video Consultation Flow**
```
Appointment created → Generate Daily.co room → Store URL in DB →
User accesses with booking reference → Load Daily.co SDK → Join room
```

## Components and Interfaces

### Component Architecture

The platform uses a hierarchical component structure with clear separation between layout, feature, and UI components:

```
app/
├── layout.tsx (Root layout with providers)
├── page.tsx (Homepage)
├── doctors/
│   ├── page.tsx (Doctor search)
│   └── [id]/
│       ├── page.tsx (Doctor profile)
│       └── book/page.tsx (Booking flow)
├── games/
│   ├── page.tsx (Games hub)
│   └── [gameId]/page.tsx (Individual game)
├── blog/
│   ├── page.tsx (Blog list)
│   └── [slug]/page.tsx (Blog post)
├── community/
│   ├── page.tsx (Community circles)
│   └── [id]/page.tsx (Circle posts)
├── resources/page.tsx
├── consultation/[reference]/page.tsx (Video room)
└── admin/
    ├── page.tsx (Dashboard)
    ├── doctors/page.tsx
    ├── appointments/page.tsx
    ├── blog/page.tsx
    └── resources/page.tsx

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── MobileMenu.tsx
├── doctors/
│   ├── DoctorCard.tsx
│   ├── DoctorSearchFilters.tsx
│   ├── DoctorProfile.tsx
│   └── AvailabilityCalendar.tsx
├── booking/
│   ├── BookingForm.tsx
│   ├── BookingSteps.tsx
│   ├── TimeSlotPicker.tsx
│   └── BookingConfirmation.tsx
├── games/
│   ├── GameCard.tsx
│   ├── GameHub.tsx
│   ├── ProgressIndicator.tsx
│   ├── BadgeDisplay.tsx
│   └── games/
│       ├── EmotionExplorer.tsx
│       ├── PatternPlanet.tsx
│       ├── DailyLifeSimulator.tsx
│       ├── FocusBubbles.tsx
│       ├── WordBridge.tsx
│       └── RoutineBuilder.tsx
├── blog/
│   ├── BlogCard.tsx
│   ├── BlogPost.tsx
│   ├── BlogFilters.tsx
│   └── ReadAloudButton.tsx
├── community/
│   ├── CircleCard.tsx
│   ├── PostList.tsx
│   └── PostCard.tsx
├── resources/
│   ├── ResourceCard.tsx
│   ├── ResourceFilters.tsx
│   └── DownloadButton.tsx
├── ai/
│   ├── AuraChat.tsx
│   ├── ChatMessage.tsx
│   └── ChatInput.tsx
├── video/
│   ├── VideoRoom.tsx
│   └── VideoControls.tsx
├── admin/
│   ├── AdminLayout.tsx
│   ├── AdminSidebar.tsx
│   ├── DoctorForm.tsx
│   ├── AppointmentList.tsx
│   ├── BlogEditor.tsx
│   └── ResourceUpload.tsx
└── ui/ (shadcn/ui components)
    ├── button.tsx
    ├── input.tsx
    ├── card.tsx
    ├── dialog.tsx
    ├── toast.tsx
    └── ... (other shadcn components)
```

### Core Component Interfaces

**DoctorCard Component**
```typescript
interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialization: string;
    bio: string;
    photoUrl: string;
    rating: number;
    hourlyRate: number;
    isActive: boolean;
  };
  variant?: 'compact' | 'full';
  showBookButton?: boolean;
}
```

**BookingForm Component**
```typescript
interface BookingFormProps {
  doctorId: string;
  selectedSlot: {
    date: Date;
    time: string;
  };
  onSuccess: (bookingReference: string) => void;
  onCancel: () => void;
}

interface BookingFormData {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  reason: string;
}
```

**GameCard Component**
```typescript
interface GameCardProps {
  game: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    category: string;
  };
  progress?: {
    completionPercentage: number;
    lastPlayed: Date;
    badges: string[];
  };
}
```

**AuraChat Component**
```typescript
interface AuraChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
```

**VideoRoom Component**
```typescript
interface VideoRoomProps {
  roomUrl: string;
  participantName: string;
  onLeave: () => void;
}
```

### State Management

**Zustand Stores**

**1. Game Progress Store**
```typescript
interface GameProgressStore {
  progress: Record<string, GameProgress>;
  badges: Badge[];
  updateProgress: (gameId: string, progress: GameProgress) => void;
  awardBadge: (badge: Badge) => void;
  getGameProgress: (gameId: string) => GameProgress | undefined;
}

interface GameProgress {
  gameId: string;
  completionPercentage: number;
  currentLevel: number;
  score: number;
  lastPlayed: Date;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}
```

**2. Preferences Store**
```typescript
interface PreferencesStore {
  reducedMotion: boolean;
  soundEnabled: boolean;
  fontSize: 'small' | 'medium' | 'large';
  setReducedMotion: (enabled: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
}
```

**3. Aura Chat Store**
```typescript
interface AuraChatStore {
  messages: ChatMessage[];
  isOpen: boolean;
  isTyping: boolean;
  addMessage: (message: ChatMessage) => void;
  setIsOpen: (open: boolean) => void;
  setIsTyping: (typing: boolean) => void;
  clearHistory: () => void;
}
```

### tRPC API Routers

**Doctor Router**
```typescript
export const doctorRouter = router({
  list: publicProcedure
    .input(z.object({
      specialization: z.string().optional(),
      minRate: z.number().optional(),
      maxRate: z.number().optional(),
    }))
    .query(async ({ input }) => {
      // Return filtered doctor list
    }),
  
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // Return doctor profile
    }),
  
  getAvailability: publicProcedure
    .input(z.object({ 
      doctorId: z.string(),
      startDate: z.date(),
      endDate: z.date(),
    }))
    .query(async ({ input }) => {
      // Return available time slots
    }),
});
```

**Appointment Router**
```typescript
export const appointmentRouter = router({
  create: publicProcedure
    .input(z.object({
      doctorId: z.string(),
      guestName: z.string().min(2),
      guestEmail: z.string().email(),
      guestPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
      scheduledTime: z.date(),
      reason: z.string().min(10),
    }))
    .mutation(async ({ input }) => {
      // Create appointment, generate booking reference
    }),
  
  getByReference: publicProcedure
    .input(z.object({ reference: z.string() }))
    .query(async ({ input }) => {
      // Return appointment details
    }),
  
  createCheckoutSession: publicProcedure
    .input(z.object({ appointmentId: z.string() }))
    .mutation(async ({ input }) => {
      // Create Stripe checkout session
    }),
});
```

**Game Router**
```typescript
export const gameRouter = router({
  list: publicProcedure
    .query(async () => {
      // Return all games
    }),
  
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // Return game details
    }),
});
```

**Blog Router**
```typescript
export const blogRouter = router({
  list: publicProcedure
    .input(z.object({
      category: z.string().optional(),
      featured: z.boolean().optional(),
    }))
    .query(async ({ input }) => {
      // Return filtered blog posts
    }),
  
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      // Return blog post
    }),
});
```

**Community Router**
```typescript
export const communityRouter = router({
  listCircles: publicProcedure
    .query(async () => {
      // Return all community circles
    }),
  
  getCirclePosts: publicProcedure
    .input(z.object({ circleId: z.string() }))
    .query(async ({ input }) => {
      // Return posts for circle
    }),
});
```

**Resource Router**
```typescript
export const resourceRouter = router({
  list: publicProcedure
    .input(z.object({
      category: z.string().optional(),
    }))
    .query(async ({ input }) => {
      // Return filtered resources
    }),
  
  download: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      // Increment download count, return signed URL
    }),
});
```

**AI Router**
```typescript
export const aiRouter = router({
  chat: publicProcedure
    .input(z.object({
      message: z.string().min(1),
      conversationHistory: z.array(z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string(),
      })),
    }))
    .mutation(async ({ input }) => {
      // Call Claude API, return response
    }),
});
```

**Admin Router**
```typescript
export const adminRouter = router({
  // Doctor management
  createDoctor: adminProcedure
    .input(doctorSchema)
    .mutation(async ({ input }) => { /* ... */ }),
  
  updateDoctor: adminProcedure
    .input(z.object({ id: z.string(), data: doctorSchema }))
    .mutation(async ({ input }) => { /* ... */ }),
  
  // Appointment management
  listAppointments: adminProcedure
    .input(z.object({
      status: z.string().optional(),
      doctorId: z.string().optional(),
    }))
    .query(async ({ input }) => { /* ... */ }),
  
  cancelAppointment: adminProcedure
    .input(z.object({ id: z.string(), reason: z.string() }))
    .mutation(async ({ input }) => { /* ... */ }),
  
  // Blog management
  createBlogPost: adminProcedure
    .input(blogPostSchema)
    .mutation(async ({ input }) => { /* ... */ }),
  
  // Resource management
  uploadResource: adminProcedure
    .input(resourceSchema)
    .mutation(async ({ input }) => { /* ... */ }),
});
```

### Service Layer

**Stripe Service**
```typescript
interface StripeService {
  createCheckoutSession(params: {
    appointmentId: string;
    amount: number;
    doctorName: string;
    guestEmail: string;
  }): Promise<{ sessionId: string; url: string }>;
  
  handleWebhook(payload: string, signature: string): Promise<void>;
}
```

**Daily.co Service**
```typescript
interface DailyService {
  createRoom(params: {
    appointmentId: string;
    scheduledTime: Date;
  }): Promise<{ roomUrl: string; roomName: string }>;
  
  deleteRoom(roomName: string): Promise<void>;
}
```

**Resend Service**
```typescript
interface ResendService {
  sendBookingConfirmation(params: {
    to: string;
    bookingReference: string;
    doctorName: string;
    scheduledTime: Date;
    videoUrl: string;
  }): Promise<void>;
  
  sendReminder(params: {
    to: string;
    bookingReference: string;
    doctorName: string;
    scheduledTime: Date;
  }): Promise<void>;
  
  sendCancellation(params: {
    to: string;
    bookingReference: string;
    reason: string;
  }): Promise<void>;
}
```

**Claude Service**
```typescript
interface ClaudeService {
  chat(params: {
    message: string;
    conversationHistory: Array<{ role: string; content: string }>;
  }): Promise<{ response: string }>;
}
```

## Data Models

### Database Schema

The platform uses Supabase PostgreSQL with Prisma ORM. Below are the core data models:

**Users Table**
```prisma
model User {
  id            String    @id @default(uuid())
  email         String    @unique
  name          String
  role          UserRole  @default(USER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  doctorProfile DoctorProfile?
  blogPosts     BlogPost[]
  comments      Comment[]
  communityPosts CommunityPost[]
  moodLogs      MoodLog[]
  notifications Notification[]
  
  @@map("users")
}

enum UserRole {
  USER
  DOCTOR
  ADMIN
}
```

**DoctorProfile Table**
```prisma
model DoctorProfile {
  id            String    @id @default(uuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  specialization String
  bio           String    @db.Text
  credentials   String    @db.Text
  photoUrl      String?
  hourlyRate    Decimal   @db.Decimal(10, 2)
  availability  Json      // Structured schedule data
  rating        Decimal   @default(0) @db.Decimal(3, 2)
  reviewCount   Int       @default(0)
  isActive      Boolean   @default(true)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  appointments  Appointment[]
  consultationNotes ConsultationNote[]
  reviews       Review[]
  
  @@map("doctor_profiles")
}
```

**Appointment Table**
```prisma
model Appointment {
  id              String    @id @default(uuid())
  doctorId        String
  doctor          DoctorProfile @relation(fields: [doctorId], references: [id])
  
  guestName       String
  guestEmail      String
  guestPhone      String
  scheduledTime   DateTime
  reason          String    @db.Text
  
  bookingReference String   @unique
  status          AppointmentStatus @default(PENDING)
  paymentStatus   PaymentStatus @default(PENDING)
  paymentIntentId String?
  videoRoomUrl    String?
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  consultationNotes ConsultationNote?
  review          Review?
  
  @@map("appointments")
  @@index([doctorId])
  @@index([bookingReference])
  @@index([scheduledTime])
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  COMPLETED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  REFUNDED
  FAILED
}
```

**ConsultationNote Table**
```prisma
model ConsultationNote {
  id            String    @id @default(uuid())
  appointmentId String    @unique
  appointment   Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)
  doctorId      String
  doctor        DoctorProfile @relation(fields: [doctorId], references: [id])
  
  notes         String    @db.Text
  createdAt     DateTime  @default(now())
  
  @@map("consultation_notes")
}
```

**GamesProgress Table**
```prisma
model GameProgress {
  id          String    @id @default(uuid())
  gameId      String
  visitorId   String    // Browser fingerprint or localStorage ID
  
  progressData Json     // Game-specific progress data
  lastPlayed  DateTime  @default(now())
  
  @@map("games_progress")
  @@index([visitorId, gameId])
}
```

**MoodLog Table**
```prisma
model MoodLog {
  id              String    @id @default(uuid())
  userId          String?
  user            User?     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  moodScore       Int       // 1-10 scale
  sensoryLogJson  Json?     // Sensory inputs (noise, light, etc.)
  eventNotes      String?   @db.Text
  loggedBy        String    // 'self' or 'caregiver'
  
  createdAt       DateTime  @default(now())
  
  @@map("mood_logs")
  @@index([userId, createdAt])
}
```

**BlogPost Table**
```prisma
model BlogPost {
  id          String    @id @default(uuid())
  title       String
  slug        String    @unique
  content     String    @db.Text
  excerpt     String?
  featuredImage String?
  
  authorId    String
  author      User      @relation(fields: [authorId], references: [id])
  
  category    String
  tags        String[]
  featured    Boolean   @default(false)
  published   Boolean   @default(false)
  publishedAt DateTime?
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  comments    Comment[]
  
  @@map("blog_posts")
  @@index([category])
  @@index([publishedAt])
}
```

**Comment Table**
```prisma
model Comment {
  id        String    @id @default(uuid())
  postId    String
  post      BlogPost  @relation(fields: [postId], references: [id], onDelete: Cascade)
  
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  content   String    @db.Text
  createdAt DateTime  @default(now())
  
  @@map("comments")
  @@index([postId])
}
```

**CommunityGroup Table**
```prisma
model CommunityGroup {
  id          String    @id @default(uuid())
  name        String
  description String    @db.Text
  icon        String?
  
  createdBy   String
  memberCount Int       @default(0)
  
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  posts       CommunityPost[]
  
  @@map("community_groups")
}
```

**CommunityPost Table**
```prisma
model CommunityPost {
  id        String    @id @default(uuid())
  groupId   String
  group     CommunityGroup @relation(fields: [groupId], references: [id], onDelete: Cascade)
  
  authorId  String
  author    User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  content   String    @db.Text
  createdAt DateTime  @default(now())
  
  @@map("community_posts")
  @@index([groupId, createdAt])
}
```

**Resource Table**
```prisma
model Resource {
  id            String    @id @default(uuid())
  title         String
  description   String    @db.Text
  fileUrl       String
  fileName      String
  fileSize      Int
  fileType      String
  
  category      String
  tags          String[]
  downloadCount Int       @default(0)
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@map("resources")
  @@index([category])
}
```

**Notification Table**
```prisma
model Notification {
  id        String    @id @default(uuid())
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  type      NotificationType
  message   String    @db.Text
  readStatus Boolean  @default(false)
  
  createdAt DateTime  @default(now())
  
  @@map("notifications")
  @@index([userId, readStatus])
}

enum NotificationType {
  APPOINTMENT_REMINDER
  APPOINTMENT_CONFIRMED
  APPOINTMENT_CANCELLED
  NEW_BLOG_POST
  COMMUNITY_REPLY
}
```

**Review Table**
```prisma
model Review {
  id            String    @id @default(uuid())
  doctorId      String
  doctor        DoctorProfile @relation(fields: [doctorId], references: [id], onDelete: Cascade)
  
  appointmentId String    @unique
  appointment   Appointment @relation(fields: [appointmentId], references: [id], onDelete: Cascade)
  
  rating        Int       // 1-5 scale
  comment       String?   @db.Text
  
  createdAt     DateTime  @default(now())
  
  @@map("reviews")
  @@index([doctorId])
}
```

### Data Validation Schemas

**Zod Schemas for API Validation**

```typescript
// Appointment creation schema
export const createAppointmentSchema = z.object({
  doctorId: z.string().uuid(),
  guestName: z.string().min(2).max(100),
  guestEmail: z.string().email(),
  guestPhone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  scheduledTime: z.date().min(new Date(), 'Cannot book in the past'),
  reason: z.string().min(10).max(1000),
});

// Doctor profile schema
export const doctorProfileSchema = z.object({
  specialization: z.string().min(2).max(100),
  bio: z.string().min(50).max(2000),
  credentials: z.string().min(10).max(1000),
  photoUrl: z.string().url().optional(),
  hourlyRate: z.number().positive().max(10000),
  availability: z.record(z.array(z.object({
    start: z.string(),
    end: z.string(),
  }))),
});

// Blog post schema
export const blogPostSchema = z.object({
  title: z.string().min(5).max(200),
  content: z.string().min(100),
  excerpt: z.string().max(300).optional(),
  category: z.string(),
  tags: z.array(z.string()).max(10),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
});

// Resource upload schema
export const resourceSchema = z.object({
  title: z.string().min(3).max(200),
  description: z.string().min(10).max(1000),
  category: z.string(),
  tags: z.array(z.string()).max(10),
  file: z.instanceof(File).refine(
    (file) => file.size <= 50 * 1024 * 1024,
    'File must be less than 50MB'
  ),
});

// AI chat schema
export const chatSchema = z.object({
  message: z.string().min(1).max(2000),
  conversationHistory: z.array(z.object({
    role: z.enum(['user', 'assistant']),
    content: z.string(),
  })).max(50),
});
```

### localStorage Data Structures

**Game Progress (localStorage key: 'auticare_game_progress')**
```typescript
interface LocalGameProgress {
  [gameId: string]: {
    completionPercentage: number;
    currentLevel: number;
    score: number;
    lastPlayed: string; // ISO date string
    gameSpecificData: Record<string, any>;
  };
}
```

**Badges (localStorage key: 'auticare_badges')**
```typescript
interface LocalBadges {
  badges: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt: string; // ISO date string
  }>;
}
```

**Preferences (localStorage key: 'auticare_preferences')**
```typescript
interface LocalPreferences {
  reducedMotion: boolean;
  soundEnabled: boolean;
  fontSize: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark'; // Future feature
}
```

**Aura Chat History (sessionStorage key: 'auticare_aura_chat')**
```typescript
interface AuraChatHistory {
  messages: Array<{
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string; // ISO date string
  }>;
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: API Input Validation

For any API route and any request payload, when the payload fails Zod schema validation, the system should reject the request before any business logic executes and return a validation error response.

**Validates: Requirements 1.7**

### Property 2: Search Filter Matching

For any set of doctor search filters (specialization, price range), all returned doctor profiles should match the specified filter criteria.

**Validates: Requirements 6.2**

### Property 3: Search Results Sorting

For any doctor search query, the returned results should be sorted by rating in descending order, with higher-rated doctors appearing first.

**Validates: Requirements 6.6**

### Property 4: Guest Booking Input Validation

For any booking form submission, the system should accept only valid email formats (RFC 5322 compliant) and valid phone numbers (E.164 format), rejecting all other formats with field-specific error messages.

**Validates: Requirements 7.2, 7.3, 31.2**

### Property 5: Booking Reference Uniqueness

For any set of appointments created in the system, all booking references should be unique with no duplicates.

**Validates: Requirements 7.4**

### Property 6: Payment Status Transition

For any appointment, when a successful payment webhook is received from Stripe, the appointment status should transition to CONFIRMED and payment_status should transition to PAID.

**Validates: Requirements 8.3**

### Property 7: Credit Card Data Exclusion

For any appointment record in the database, the record should not contain credit card numbers, CVV codes, or other PCI-sensitive payment data.

**Validates: Requirements 8.6**

### Property 8: Video Room URL Uniqueness

For any set of appointments with video consultations, each appointment should have a unique Daily.co video room URL with no duplicates.

**Validates: Requirements 10.2**

### Property 9: Game Progress Persistence

For any game session, when progress is updated, the new progress data should be stored in localStorage under the key 'auticare_game_progress' and should be retrievable in subsequent sessions.

**Validates: Requirements 11.4**

### Property 10: Badge Award System

For any game milestone achievement, when the milestone threshold is reached, a corresponding badge should be awarded and stored in localStorage, and the badge should appear in the user's badge collection.

**Validates: Requirements 11.8**

### Property 11: Positive Feedback Consistency

For any answer submitted in Emotion Explorer game, the feedback message should contain positive or neutral language with no negative words (e.g., "wrong", "incorrect", "bad", "failed").

**Validates: Requirements 12.3, 12.7**

### Property 12: Progressive Difficulty

For any sequence of levels in Pattern Planet game, the difficulty score of level N+1 should be greater than or equal to the difficulty score of level N.

**Validates: Requirements 13.4**

### Property 13: Download Counter Increment

For any resource, when a download is initiated, the download_count field should increment by exactly 1.

**Validates: Requirements 20.5**

### Property 14: Conversation Context Preservation

For any Aura chat session, when a new message is sent, the API request should include all previous messages from the current session in the conversationHistory array.

**Validates: Requirements 21.5**

### Property 15: Doctor Deactivation Filtering

For any doctor profile with isActive set to false, that doctor should not appear in public search results regardless of other filter criteria.

**Validates: Requirements 23.5**

### Property 16: Resource Deletion Cascade

For any resource deletion, when the database record is deleted, the corresponding file should be removed from Supabase Storage within the same transaction.

**Validates: Requirements 26.5**

### Property 17: Navigation Highlight Consistency

For any page in the platform, exactly one navigation item should be highlighted as active, and it should correspond to the current page route.

**Validates: Requirements 28.2**

### Property 18: Touch Target Minimum Size

For any interactive element (button, link, input) on mobile viewports (width < 768px), the element should have a minimum touch target size of 44x44 pixels.

**Validates: Requirements 29.4**

### Property 19: Loading Indicator Display

For any API request that takes longer than 2 seconds, a progress indicator or loading state should be visible to the user.

**Validates: Requirements 30.6**

### Property 20: Error Message User-Friendliness

For any API error response, the displayed error message should be in plain language (no technical jargon, stack traces, or error codes visible to users) and should provide actionable guidance.

**Validates: Requirements 31.1**

### Property 21: Keyboard Navigation Completeness

For any interactive functionality on any page, the functionality should be fully accessible and operable using only keyboard input (Tab, Enter, Space, Arrow keys, Escape).

**Validates: Requirements 35.2**

### Property 22: Color Contrast Compliance

For any text element on any page, the contrast ratio between text color and background color should meet or exceed WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 35.3**

### Property 23: Form Label Association

For any form input element, the input should have an associated label element properly linked via htmlFor/id attributes or aria-label attribute.

**Validates: Requirements 35.9**

### Property 24: Reduced Motion Compliance

For any page, when the user's system has prefers-reduced-motion enabled, no CSS animations or transitions should execute.

**Validates: Requirements 3.4**


## Error Handling

### Error Handling Strategy

The platform implements a comprehensive error handling strategy across all layers to ensure graceful degradation and clear user feedback.

### API Layer Error Handling

**tRPC Error Handling**

All tRPC procedures use standardized error codes and messages:

```typescript
import { TRPCError } from '@trpc/server';

// Validation errors
throw new TRPCError({
  code: 'BAD_REQUEST',
  message: 'Invalid input data',
  cause: zodError,
});

// Not found errors
throw new TRPCError({
  code: 'NOT_FOUND',
  message: 'Resource not found',
});

// Authorization errors
throw new TRPCError({
  code: 'UNAUTHORIZED',
  message: 'Admin access required',
});

// Internal errors
throw new TRPCError({
  code: 'INTERNAL_SERVER_ERROR',
  message: 'An unexpected error occurred',
});
```

**Error Response Format**

All API errors follow a consistent structure:

```typescript
interface APIError {
  code: string;
  message: string;
  field?: string; // For validation errors
  details?: Record<string, any>;
}
```

### Client-Side Error Handling

**React Error Boundaries**

Error boundaries catch rendering errors and display fallback UI:

```typescript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('React Error:', error, errorInfo);
    // Log to error tracking service
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

**API Error Handling**

tRPC client errors are handled with user-friendly messages:

```typescript
const mutation = trpc.appointments.create.useMutation({
  onError: (error) => {
    if (error.data?.code === 'BAD_REQUEST') {
      toast.error('Please check your input and try again');
    } else if (error.data?.code === 'NOT_FOUND') {
      toast.error('The requested resource was not found');
    } else {
      toast.error('Something went wrong. Please try again later');
    }
  },
});
```

### Form Validation Errors

Form validation errors are displayed inline with field-specific messages:

```typescript
interface FormErrors {
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  reason?: string;
}

// Display errors next to fields
{errors.guestEmail && (
  <p className="text-sm text-red-600 mt-1">
    {errors.guestEmail}
  </p>
)}
```

### External Service Error Handling

**Stripe Errors**

```typescript
try {
  const session = await stripe.checkout.sessions.create({...});
} catch (error) {
  if (error.type === 'StripeCardError') {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Your card was declined. Please try another payment method.',
    });
  }
  throw new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Payment processing failed. Please try again.',
  });
}
```

**Daily.co Errors**

```typescript
try {
  const room = await daily.createRoom({...});
} catch (error) {
  console.error('Daily.co error:', error);
  throw new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Failed to create video room. Please contact support.',
  });
}
```

**Resend Errors**

```typescript
try {
  await resend.emails.send({...});
} catch (error) {
  console.error('Email send error:', error);
  // Don't fail the request, just log the error
  // User still gets booking confirmation on screen
}
```

**Claude API Errors**

```typescript
try {
  const response = await anthropic.messages.create({...});
} catch (error) {
  if (error.status === 429) {
    return { response: "I'm experiencing high demand right now. Please try again in a moment." };
  }
  return { response: "I'm having trouble responding right now. Please try again." };
}
```

### Database Error Handling

**Prisma Errors**

```typescript
try {
  const appointment = await prisma.appointment.create({...});
} catch (error) {
  if (error.code === 'P2002') {
    // Unique constraint violation
    throw new TRPCError({
      code: 'CONFLICT',
      message: 'A booking with this reference already exists',
    });
  }
  if (error.code === 'P2025') {
    // Record not found
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'The requested record was not found',
    });
  }
  throw new TRPCError({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'Database operation failed',
  });
}
```

### Network Error Handling

**Offline Detection**

```typescript
useEffect(() => {
  const handleOffline = () => {
    toast.error('You are offline. Some features may not work.');
  };
  
  const handleOnline = () => {
    toast.success('You are back online.');
  };
  
  window.addEventListener('offline', handleOffline);
  window.addEventListener('online', handleOnline);
  
  return () => {
    window.removeEventListener('offline', handleOffline);
    window.removeEventListener('online', handleOnline);
  };
}, []);
```

**Request Timeout Handling**

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000,
    },
  },
});
```

### Error Logging and Monitoring

**Console Logging (Development)**

```typescript
if (process.env.NODE_ENV === 'development') {
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    context: additionalContext,
  });
}
```

**Error Tracking (Production)**

```typescript
// Future: Integrate with Sentry or similar service
function logError(error: Error, context?: Record<string, any>) {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    // Sentry.captureException(error, { extra: context });
  }
  console.error(error, context);
}
```

### User-Facing Error Messages

All error messages follow these principles:

1. **Plain Language**: No technical jargon or error codes
2. **Actionable**: Tell users what they can do to resolve the issue
3. **Empathetic**: Use supportive, non-blaming language
4. **Specific**: Provide context about what went wrong

Examples:

- ❌ "Error 500: Internal server error"
- ✅ "Something went wrong on our end. Please try again in a moment."

- ❌ "Validation failed: email is required"
- ✅ "Please enter your email address to continue."

- ❌ "Unauthorized: 401"
- ✅ "Please enter the admin passphrase to access this page."

## Testing Strategy

### Testing Approach

The AutiCare platform uses a dual testing approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness properties. This comprehensive strategy ensures both concrete functionality and general correctness across all inputs.

### Testing Stack

- **Unit Testing**: Vitest for fast unit and integration tests
- **Property-Based Testing**: fast-check for property-based testing
- **E2E Testing**: Playwright for end-to-end browser testing
- **Component Testing**: React Testing Library for component tests
- **API Testing**: tRPC testing utilities for API route tests

### Property-Based Testing

Property-based tests verify universal properties across many generated inputs. Each property test runs a minimum of 100 iterations with randomized inputs.

**Configuration**

```typescript
import fc from 'fast-check';

// Minimum 100 iterations per property test
fc.assert(
  fc.property(/* arbitraries */, (/* inputs */) => {
    // Property assertion
  }),
  { numRuns: 100 }
);
```

**Tagging Convention**

Each property test must reference its design document property:

```typescript
describe('Feature: auticare-platform, Property 1: API Input Validation', () => {
  it('should reject invalid payloads before business logic executes', () => {
    fc.assert(
      fc.property(
        fc.record({
          doctorId: fc.string(),
          guestEmail: fc.string(),
          guestPhone: fc.string(),
        }),
        (invalidPayload) => {
          // Test that invalid input is rejected
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property Test Examples**

**Property 4: Guest Booking Input Validation**

```typescript
describe('Feature: auticare-platform, Property 4: Guest Booking Input Validation', () => {
  it('should accept only valid email formats', () => {
    fc.assert(
      fc.property(
        fc.emailAddress(),
        (validEmail) => {
          const result = createAppointmentSchema.safeParse({
            doctorId: 'valid-uuid',
            guestName: 'John Doe',
            guestEmail: validEmail,
            guestPhone: '+1234567890',
            scheduledTime: new Date(),
            reason: 'Test reason',
          });
          expect(result.success).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });
  
  it('should reject invalid email formats', () => {
    fc.assert(
      fc.property(
        fc.string().filter(s => !s.includes('@')),
        (invalidEmail) => {
          const result = createAppointmentSchema.safeParse({
            doctorId: 'valid-uuid',
            guestName: 'John Doe',
            guestEmail: invalidEmail,
            guestPhone: '+1234567890',
            scheduledTime: new Date(),
            reason: 'Test reason',
          });
          expect(result.success).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property 5: Booking Reference Uniqueness**

```typescript
describe('Feature: auticare-platform, Property 5: Booking Reference Uniqueness', () => {
  it('should generate unique booking references for all appointments', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({
          doctorId: fc.uuid(),
          guestName: fc.string(),
          guestEmail: fc.emailAddress(),
        }), { minLength: 10, maxLength: 100 }),
        async (appointmentData) => {
          const references = await Promise.all(
            appointmentData.map(data => createAppointment(data))
          );
          const uniqueReferences = new Set(references.map(a => a.bookingReference));
          expect(uniqueReferences.size).toBe(references.length);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property 9: Game Progress Persistence**

```typescript
describe('Feature: auticare-platform, Property 9: Game Progress Persistence', () => {
  it('should persist and retrieve game progress from localStorage', () => {
    fc.assert(
      fc.property(
        fc.record({
          gameId: fc.constantFrom('emotion-explorer', 'pattern-planet', 'focus-bubbles'),
          completionPercentage: fc.integer({ min: 0, max: 100 }),
          currentLevel: fc.integer({ min: 1, max: 20 }),
          score: fc.integer({ min: 0, max: 10000 }),
        }),
        (progress) => {
          const store = useGameProgressStore.getState();
          store.updateProgress(progress.gameId, progress);
          
          const retrieved = store.getGameProgress(progress.gameId);
          expect(retrieved).toEqual(progress);
          
          // Verify localStorage
          const stored = JSON.parse(localStorage.getItem('auticare_game_progress') || '{}');
          expect(stored[progress.gameId]).toEqual(progress);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Property 22: Color Contrast Compliance**

```typescript
describe('Feature: auticare-platform, Property 22: Color Contrast Compliance', () => {
  it('should meet WCAG 2.1 AA contrast ratios for all text', () => {
    fc.assert(
      fc.property(
        fc.record({
          textColor: fc.hexaString({ minLength: 6, maxLength: 6 }),
          backgroundColor: fc.hexaString({ minLength: 6, maxLength: 6 }),
          fontSize: fc.integer({ min: 12, max: 48 }),
        }),
        ({ textColor, backgroundColor, fontSize }) => {
          const contrast = calculateContrastRatio(textColor, backgroundColor);
          const isLargeText = fontSize >= 18 || (fontSize >= 14 && isBold);
          const minContrast = isLargeText ? 3 : 4.5;
          
          // Only test combinations actually used in the design system
          if (isUsedInDesignSystem(textColor, backgroundColor)) {
            expect(contrast).toBeGreaterThanOrEqual(minContrast);
          }
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Unit Testing

Unit tests verify specific examples, edge cases, and integration points. They complement property tests by testing concrete scenarios.

**Unit Test Examples**

**Booking Flow**

```typescript
describe('Booking Flow', () => {
  it('should create appointment with valid guest data', async () => {
    const appointment = await createAppointment({
      doctorId: 'doctor-123',
      guestName: 'Jane Smith',
      guestEmail: 'jane@example.com',
      guestPhone: '+1234567890',
      scheduledTime: new Date('2024-12-01T10:00:00Z'),
      reason: 'Initial consultation',
    });
    
    expect(appointment.bookingReference).toBeDefined();
    expect(appointment.status).toBe('PENDING');
    expect(appointment.paymentStatus).toBe('PENDING');
  });
  
  it('should reject booking in the past', async () => {
    await expect(
      createAppointment({
        doctorId: 'doctor-123',
        guestName: 'Jane Smith',
        guestEmail: 'jane@example.com',
        guestPhone: '+1234567890',
        scheduledTime: new Date('2020-01-01T10:00:00Z'),
        reason: 'Initial consultation',
      })
    ).rejects.toThrow('Cannot book in the past');
  });
});
```

**Admin Authentication**

```typescript
describe('Admin Authentication', () => {
  it('should grant access with correct passphrase', async () => {
    const result = await verifyAdminPassphrase('correct-passphrase');
    expect(result.success).toBe(true);
  });
  
  it('should deny access with incorrect passphrase', async () => {
    const result = await verifyAdminPassphrase('wrong-passphrase');
    expect(result.success).toBe(false);
  });
});
```

**Game Badge System**

```typescript
describe('Badge Award System', () => {
  it('should award badge when milestone is reached', () => {
    const store = useGameProgressStore.getState();
    
    // Simulate reaching milestone
    store.updateProgress('emotion-explorer', {
      gameId: 'emotion-explorer',
      completionPercentage: 100,
      currentLevel: 10,
      score: 1000,
      lastPlayed: new Date(),
    });
    
    // Check badge was awarded
    const badges = store.badges;
    expect(badges).toContainEqual(
      expect.objectContaining({
        name: 'Emotion Master',
        gameId: 'emotion-explorer',
      })
    );
  });
});
```

### Component Testing

Component tests verify UI behavior and user interactions.

```typescript
describe('DoctorCard Component', () => {
  it('should display doctor information', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    
    expect(screen.getByText(mockDoctor.name)).toBeInTheDocument();
    expect(screen.getByText(mockDoctor.specialization)).toBeInTheDocument();
    expect(screen.getByText(`$${mockDoctor.hourlyRate}/hr`)).toBeInTheDocument();
  });
  
  it('should show book button when showBookButton is true', () => {
    render(<DoctorCard doctor={mockDoctor} showBookButton={true} />);
    
    expect(screen.getByRole('button', { name: /book/i })).toBeInTheDocument();
  });
});
```

### API Testing

API tests verify tRPC router behavior.

```typescript
describe('Doctor Router', () => {
  it('should return filtered doctors by specialization', async () => {
    const caller = appRouter.createCaller({ session: null });
    
    const result = await caller.doctor.list({
      specialization: 'Behavioral Therapy',
    });
    
    expect(result.every(d => d.specialization === 'Behavioral Therapy')).toBe(true);
  });
  
  it('should return 404 for non-existent doctor', async () => {
    const caller = appRouter.createCaller({ session: null });
    
    await expect(
      caller.doctor.getById({ id: 'non-existent-id' })
    ).rejects.toThrow('NOT_FOUND');
  });
});
```

### E2E Testing

End-to-end tests verify complete user flows in a real browser.

```typescript
describe('Guest Booking Flow E2E', () => {
  test('should complete full booking flow', async ({ page }) => {
    // Navigate to doctors page
    await page.goto('/doctors');
    
    // Search for doctor
    await page.fill('[data-testid="search-input"]', 'Behavioral Therapy');
    await page.click('[data-testid="search-button"]');
    
    // Select doctor
    await page.click('[data-testid="doctor-card"]:first-child');
    
    // Select time slot
    await page.click('[data-testid="time-slot"]:first-child');
    
    // Fill booking form
    await page.fill('[name="guestName"]', 'Test User');
    await page.fill('[name="guestEmail"]', 'test@example.com');
    await page.fill('[name="guestPhone"]', '+1234567890');
    await page.fill('[name="reason"]', 'Initial consultation for my child');
    
    // Submit booking
    await page.click('[data-testid="submit-booking"]');
    
    // Verify confirmation page
    await expect(page.locator('[data-testid="booking-reference"]')).toBeVisible();
  });
});
```

### Accessibility Testing

Accessibility tests verify WCAG compliance.

```typescript
describe('Accessibility', () => {
  it('should have no accessibility violations on homepage', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should support keyboard navigation', async () => {
    render(<Navigation />);
    
    const firstLink = screen.getAllByRole('link')[0];
    firstLink.focus();
    expect(firstLink).toHaveFocus();
    
    userEvent.tab();
    const secondLink = screen.getAllByRole('link')[1];
    expect(secondLink).toHaveFocus();
  });
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage
- **Property Test Coverage**: All 24 correctness properties implemented
- **E2E Test Coverage**: All critical user flows (booking, games, admin)
- **Accessibility Coverage**: All public pages tested with axe-core

### Continuous Integration

All tests run automatically on every pull request:

```yaml
# .github/workflows/test.yml
name: Test
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run test:unit
      - run: npm run test:property
      - run: npm run test:e2e
```

### Testing Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the system does, not how it does it
2. **Use Realistic Data**: Test with data that resembles production scenarios
3. **Test Edge Cases**: Empty inputs, boundary values, special characters
4. **Test Error Paths**: Verify error handling and user feedback
5. **Keep Tests Fast**: Unit tests should run in milliseconds, property tests in seconds
6. **Maintain Test Isolation**: Each test should be independent and not affect others
7. **Use Descriptive Names**: Test names should clearly describe what is being tested
8. **Balance Coverage**: Don't over-test trivial code, focus on critical paths

