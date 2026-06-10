# Speelans AI - Autism Support Platform

A comprehensive web platform designed to support individuals with autism, their families, and medical professionals. Features doctor search and booking, video consultations, autism-friendly games, educational content, community support, and resource libraries.

## 🌟 Features

- **Doctor Search & Booking**: Find verified autism specialists and book video consultations
- **Sensory-Friendly Games**: 6 educational games designed for skill development
- **Educational Content**: Expert blogs, resources, and IEP toolkits
- **Community Support**: Safe, moderated support circles (read-only for guests)
- **Video Consultations**: Integrated Daily.co video calling
- **Guest Booking**: No account required for initial bookings
- **Responsive Design**: Works seamlessly on all device sizes
- **Accessibility**: WCAG 2.1 AA compliant, sensory-friendly design

## 🎮 Games

1. **Emotion Explorer** - Learn to recognize emotions through scenarios
2. **Pattern Planet** - Strengthen logical thinking with pattern recognition
3. **Daily Life Simulator** - Practice social situations safely
4. **Focus Bubbles** - Improve concentration with calming gameplay
5. **Word Bridge** - Build vocabulary by connecting concepts
6. **Routine Builder** - Create and organize daily routines

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Stripe account (for payments)
- Daily.co account (for video calls)
- Resend account (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MISAUTIS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Supabase
   DATABASE_URL="your-supabase-db-url"
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   
   # Stripe
   STRIPE_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   
   # Daily.co
   DAILY_API_KEY="your-daily-api-key"
   
   # Resend
   RESEND_API_KEY="re_..."
   
   # Admin
   ADMIN_PASSPHRASE="your-secure-passphrase"
   
   # App URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Database Setup**
   ```bash
   # Push schema to Supabase
   npm run db:push
   
   # Generate Prisma client
   npm run db:generate
   
   # Seed database (optional)
   npm run db:seed
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Production Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Add Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.example`

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Hosting Platforms

For other platforms (Railway, Render, Heroku, etc.):

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Environment Variables**: Ensure all environment variables are set in your hosting platform.

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data

## 📂 Project Structure

```
MISAUTIS/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Role-based dashboards
│   ├── games/              # Game pages
│   ├── api/                # API routes
│   └── ...
├── components/             # React components
│   ├── games/              # Game components
│   ├── ui/                 # Reusable UI components
│   └── ...
├── lib/                    # Utility libraries
│   ├── stores/             # Zustand stores
│   ├── trpc/               # tRPC configuration
│   └── ...
├── prisma/                 # Database schema & seeds
├── public/                 # Static assets
└── server/                 # tRPC server setup
```

## 🔧 Configuration

### Database Schema
The application uses Prisma with Supabase PostgreSQL. Key tables:
- `users` - User accounts and profiles  
- `doctor_profiles` - Healthcare professional data
- `appointments` - Booking and consultation data
- `games_progress` - Game progress tracking
- `blog_posts` - Educational content
- `resources` - Downloadable materials

### Authentication
- Supabase Auth for user management
- Role-based access control (patient, therapist, admin)
- Passphrase-based admin access for current build

### External Services
- **Supabase**: Database, authentication, file storage
- **Stripe**: Payment processing for consultations  
- **Daily.co**: Video consultation infrastructure
- **Resend**: Transactional email delivery

## 🎨 Design System

The platform uses a sensory-friendly design approach:
- Soft color palette (blues, greens, warm whites)
- No harsh animations or aggressive contrast
- WCAG 2.1 AA accessibility compliance
- Consistent typography (Nunito font family)
- Touch-friendly interface for mobile devices

## 🚨 Environment Variables

Ensure all required environment variables are set:

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | Supabase database connection | ✅ |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key | ✅ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | ✅ |
| `DAILY_API_KEY` | Daily.co API key | ✅ |
| `RESEND_API_KEY` | Resend API key | ✅ |
| `ADMIN_PASSPHRASE` | Admin dashboard access | ✅ |
| `NEXT_PUBLIC_APP_URL` | Application base URL | ✅ |

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Mobile**: 320px - 639px (single column, large touch targets)
- **Tablet**: 640px - 1023px (two columns, medium sizing)  
- **Desktop**: 1024px+ (multi-column, full features)

## 🔒 Security Features

- Environment variable validation
- Input sanitization with Zod schemas
- Rate limiting on API endpoints
- Secure payment processing with Stripe
- HTTPS enforcement in production
- Proper CORS policies

## 📞 Support

For deployment issues or questions:
1. Check the logs for specific error messages
2. Verify all environment variables are correctly set
3. Ensure database schema is up to date with `npm run db:push`
4. Check external service API keys and permissions

## 🏗️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and developer experience  
- **Tailwind CSS** - Utility-first CSS framework
- **Prisma** - Database ORM and migrations
- **tRPC** - End-to-end type-safe APIs
- **Zustand** - Lightweight state management
- **React Query** - Server state management

---

**Version**: 0.1.0  
**License**: ISC  
**Platform**: Autism Support & Care