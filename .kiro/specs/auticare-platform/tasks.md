# Implementation Plan: AutiCare Platform

## Overview

This implementation plan breaks down the AutiCare platform into discrete coding tasks following the build sequence: Foundation → Doctors & Booking → Games → Content → AI & Admin → Polish. Each task builds incrementally on previous work, with checkpoints to validate progress. The platform uses Next.js 14, TypeScript, Supabase, and integrates with Stripe, Daily.co, Resend, and Claude API.

## Tasks

### Phase 1: Foundation

- [x] 1. Set up project structure and core dependencies
  - Initialize Next.js 14 project with TypeScript in strict mode
  - Install and configure Tailwind CSS and shadcn/ui
  - Set up Supabase client and Prisma ORM
  - Configure tRPC with App Router
  - Set up Zustand for client state management
  - Create environment variable configuration with validation
  - _Requirements: 1.1, 1.2, 1.5, 1.8, 33.1-33.8_

- [ ]* 1.1 Write property test for API input validation
  - **Property 1: API Input Validation**
  - **Validates: Requirements 1.7**

- [x] 2. Create database schema and migrations
  - Define Prisma schema for all tables (users, doctor_profiles, appointments, consultation_notes, games_progress, mood_logs, blog_posts, comments, community_groups, community_posts, resources, notifications, reviews)
  - Create initial migration
  - Set up Supabase Storage buckets for files and images
  - _Requirements: 2.1-2.13_

- [x] 3. Create database seed script with sample data
  - Create seed script with 10+ doctor profiles across specializations
  - Add 20+ blog posts across categories
  - Add 5+ community circles with sample posts
  - Add 15+ resources across categories
  - Add sample appointments in various states
  - _Requirements: 32.1-32.7_

- [x] 4. Implement sensory-friendly design system
  - Configure Tailwind theme with soft blues, greens, warm whites
  - Set up typography with Inter/Nunito fonts, minimum 16px body text
  - Create CSS utilities for reduced motion support
  - Build core UI components using shadcn/ui (Button, Input, Card, Dialog, Toast)
  - Implement consistent spacing and layout patterns
  - _Requirements: 3.1-3.10_


- [ ]* 4.1 Write property test for reduced motion compliance
  - **Property 24: Reduced Motion Compliance**
  - **Validates: Requirements 3.4**

- [ ]* 4.2 Write property test for color contrast compliance
  - **Property 22: Color Contrast Compliance**
  - **Validates: Requirements 35.3**

- [x] 5. Build layout components (Header, Footer, Navigation)
  - Create root layout with providers (tRPC, React Query, Zustand)
  - Build Header component with logo and navigation links
  - Build Navigation component with Home, Doctors, Games, Blog, Community, Resources links
  - Build mobile-responsive hamburger menu
  - Build Footer component with links and contact information
  - Implement breadcrumb navigation component
  - _Requirements: 28.1-28.6_

- [ ]* 5.1 Write property test for navigation highlight consistency
  - **Property 17: Navigation Highlight Consistency**
  - **Validates: Requirements 28.2**

- [ ]* 5.2 Write property test for keyboard navigation completeness
  - **Property 21: Keyboard Navigation Completeness**
  - **Validates: Requirements 35.2**

- [-] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

### Phase 2: Doctors & Booking

- [x] 7. Implement doctor profile data layer
  - Create tRPC doctor router with list, getById, getAvailability procedures
  - Implement Zod validation schemas for doctor queries
  - Build Prisma queries for doctor filtering and search
  - _Requirements: 5.1-5.6, 6.1-6.6_

- [ ]* 7.1 Write property test for search filter matching
  - **Property 2: Search Filter Matching**
  - **Validates: Requirements 6.2**

- [ ]* 7.2 Write property test for search results sorting
  - **Property 3: Search Results Sorting**
  - **Validates: Requirements 6.6**

- [ ]* 7.3 Write property test for doctor deactivation filtering
  - **Property 15: Doctor Deactivation Filtering**
  - **Validates: Requirements 23.5**

- [x] 8. Build doctor search and profile UI
  - Create /doctors page with search filters (specialization, price range, availability)
  - Build DoctorCard component displaying name, photo, specialization, rating, hourly rate
  - Build DoctorSearchFilters component with filter controls
  - Create /doctors/[id] page displaying full doctor profile
  - Build DoctorProfile component with bio, credentials, reviews
  - Build AvailabilityCalendar component showing available time slots
  - _Requirements: 6.1-6.6_

- [x] 9. Implement guest booking flow
  - Create /doctors/[id]/book page with multi-step booking form
  - Build BookingForm component with guest name, email, phone, reason fields
  - Build TimeSlotPicker component for selecting appointment time
  - Build BookingSteps component showing progress indicator
  - Implement form validation with Zod schemas
  - Create tRPC appointment router with create, getByReference procedures
  - Generate unique booking reference for each appointment
  - _Requirements: 7.1-7.7_

- [ ]* 9.1 Write property test for guest booking input validation
  - **Property 4: Guest Booking Input Validation**
  - **Validates: Requirements 7.2, 7.3, 31.2**

- [ ]* 9.2 Write property test for booking reference uniqueness
  - **Property 5: Booking Reference Uniqueness**
  - **Validates: Requirements 7.4**


- [x] 10. Integrate Stripe payment processing
  - Set up Stripe SDK and API keys in environment variables
  - Create Stripe service module with createCheckoutSession method
  - Implement tRPC mutation for creating checkout sessions
  - Build payment redirect flow after booking form submission
  - Create /api/webhooks/stripe route for payment webhooks
  - Implement webhook handler to update appointment status and payment_status
  - _Requirements: 8.1-8.6_

- [ ]* 10.1 Write property test for payment status transition
  - **Property 6: Payment Status Transition**
  - **Validates: Requirements 8.3**

- [ ]* 10.2 Write property test for credit card data exclusion
  - **Property 7: Credit Card Data Exclusion**
  - **Validates: Requirements 8.6**

- [x] 11. Implement booking confirmation and email notifications
  - Set up Resend SDK and API key in environment variables
  - Create Resend service module with sendBookingConfirmation, sendReminder, sendCancellation methods
  - Build email templates for booking confirmation with booking reference, doctor name, appointment time, video link
  - Create BookingConfirmation component displaying confirmation page
  - Implement email sending after successful payment
  - Set up scheduled job for 24-hour reminder emails (using Vercel Cron or external scheduler)
  - _Requirements: 9.1-9.5_

- [x] 12. Integrate Daily.co video consultation system
  - Set up Daily.co SDK and API key in environment variables
  - Create Daily.co service module with createRoom, deleteRoom methods
  - Generate unique video room URL when appointment is created
  - Store video room URL in appointment record
  - Create /consultation/[reference] page for video consultations
  - Build VideoRoom component with Daily.co embedded SDK
  - Build VideoControls component with mute, video toggle, end call buttons
  - Implement participant name display in video interface
  - _Requirements: 10.1-10.7_

- [ ]* 12.1 Write property test for video room URL uniqueness
  - **Property 8: Video Room URL Uniqueness**
  - **Validates: Requirements 10.2**

- [ ] 13. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

### Phase 3: Games

- [x] 14. Build games hub and progress tracking system
  - Create /games page displaying all 6 games
  - Build GameCard component with title, description, thumbnail, progress indicator
  - Build GameHub component with grid layout of game cards
  - Create Zustand game progress store with updateProgress, awardBadge, getGameProgress methods
  - Implement localStorage persistence for game progress (key: 'auticare_game_progress')
  - Implement localStorage persistence for badges (key: 'auticare_badges')
  - Build ProgressIndicator component showing completion percentage
  - Build BadgeDisplay component showing earned badges
  - _Requirements: 11.1-11.8_

- [ ]* 14.1 Write property test for game progress persistence
  - **Property 9: Game Progress Persistence**
  - **Validates: Requirements 11.4**

- [ ]* 14.2 Write property test for badge award system
  - **Property 10: Badge Award System**
  - **Validates: Requirements 11.8**

- [x] 15. Implement Emotion Explorer game
  - Create /games/emotion-explorer page
  - Build EmotionExplorer component with facial expression display
  - Create 20+ emotion scenarios with images and multiple choice answers
  - Implement answer selection and positive feedback logic
  - Track score and progress in game progress store
  - Award badges for milestones (10 correct, 20 correct)
  - Use sensory-friendly colors and animations
  - _Requirements: 12.1-12.7_


- [ ]* 15.1 Write property test for positive feedback consistency
  - **Property 11: Positive Feedback Consistency**
  - **Validates: Requirements 12.3, 12.7**

- [x] 16. Implement Pattern Planet game
  - Create /games/pattern-planet page
  - Build PatternPlanet component with pattern display
  - Create 15+ pattern challenges with visual/logical patterns
  - Implement progressive difficulty system with level tracking
  - Implement answer selection and positive feedback logic
  - Track completion percentage and current level in game progress store
  - Award badges for milestones (level 5, level 10, level 15)
  - _Requirements: 13.1-13.7_

- [ ]* 16.1 Write property test for progressive difficulty
  - **Property 12: Progressive Difficulty**
  - **Validates: Requirements 13.4**

- [x] 17. Implement Daily Life Simulator game
  - Create /games/daily-life-simulator page
  - Build DailyLifeSimulator component with scenario display
  - Create 12+ daily life scenarios (ordering food, asking for help, small talk)
  - Implement response selection and positive feedback logic
  - Track scenarios completed in game progress store
  - Award badges for milestones (5 scenarios, 10 scenarios)
  - _Requirements: 14.1-14.7_

- [x] 18. Implement Focus Bubbles game
  - Create /games/focus-bubbles page
  - Build FocusBubbles component with bubble animation
  - Implement bubble spawning logic with increasing speed/quantity
  - Implement click/tap detection and positive visual feedback
  - Track high score and current streak in game progress store
  - Implement pause functionality
  - Award badges for milestones (100 bubbles, 500 bubbles)
  - Use calming colors and smooth animations
  - _Requirements: 15.1-15.7_

- [x] 19. Implement Word Bridge game
  - Create /games/word-bridge page
  - Build WordBridge component with word pair display
  - Create 20+ word pairs with connecting words
  - Implement hint system for stuck players
  - Implement answer submission and positive feedback logic
  - Track words completed and accuracy rate in game progress store
  - Award badges for milestones (10 words, 20 words)
  - _Requirements: 16.1-16.7_

- [x] 20. Implement Routine Builder game
  - Create /games/routine-builder page
  - Build RoutineBuilder component with drag-and-drop interface
  - Create multiple routine scenarios (morning, school prep, bedtime)
  - Implement activity arrangement logic with visual icons and text
  - Implement submission and positive feedback logic
  - Track routines completed in game progress store
  - Award badges for milestones (3 routines, 6 routines)
  - _Requirements: 17.1-17.7_

- [ ] 21. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

### Phase 4: Content

- [x] 22. Implement blog and news content system
  - Create tRPC blog router with list, getBySlug procedures
  - Implement Zod validation schemas for blog queries
  - Create /blog page displaying all published blog posts
  - Build BlogCard component with title, excerpt, author, date, featured image
  - Build BlogFilters component for category filtering
  - Create /blog/[slug] page displaying full blog post
  - Build BlogPost component with formatted content
  - Implement like button with localStorage persistence
  - Build ReadAloudButton component using browser text-to-speech API
  - _Requirements: 18.1-18.9_


- [x] 23. Implement community support circles
  - Create tRPC community router with listCircles, getCirclePosts procedures
  - Create /community page displaying all community circles
  - Build CircleCard component with name, description, member count, recent activity
  - Create /community/[id] page displaying posts in read-only mode
  - Build PostList component displaying community posts
  - Build PostCard component with author, content, timestamp, reply count
  - Display message indicating posting requires account (future feature)
  - _Requirements: 19.1-19.6_

- [x] 24. Implement resource library and IEP toolkit
  - Create tRPC resource router with list, download procedures
  - Create /resources page displaying all resources
  - Build ResourceCard component with title, description, file type, download count
  - Build ResourceFilters component for category filtering
  - Implement download functionality with Supabase Storage signed URLs
  - Implement download counter increment on each download
  - _Requirements: 20.1-20.6_

- [ ]* 24.1 Write property test for download counter increment
  - **Property 13: Download Counter Increment**
  - **Validates: Requirements 20.5**

- [ ] 25. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

### Phase 5: AI & Admin

- [ ] 26. Implement AI assistant "Aura"
  - Set up Anthropic Claude SDK and API key in environment variables
  - Create Claude service module with chat method
  - Create tRPC AI router with chat mutation
  - Build AuraChat component as floating chat interface
  - Build ChatMessage component for displaying messages
  - Build ChatInput component for user input
  - Implement conversation context management with sessionStorage
  - Implement typing indicators during response generation
  - Implement minimize/maximize functionality
  - Use plain, empathetic language in system prompts
  - _Requirements: 21.1-21.9_

- [ ]* 26.1 Write property test for conversation context preservation
  - **Property 14: Conversation Context Preservation**
  - **Validates: Requirements 21.5**

- [ ] 27. Implement admin dashboard authentication
  - Create /admin route with passphrase entry form
  - Implement passphrase verification against environment variable
  - Set up HTTP-only cookie session for admin access
  - Create AdminLayout component with sidebar navigation
  - Build AdminSidebar component with links to management pages
  - Implement middleware to protect admin routes
  - _Requirements: 22.1-22.7_

- [ ] 28. Build admin dashboard - doctor management
  - Create /admin/doctors page listing all doctor profiles
  - Build DoctorForm component for creating/editing doctors
  - Implement tRPC admin router with createDoctor, updateDoctor, deactivateDoctor mutations
  - Implement doctor activation/deactivation functionality
  - Add form validation for all required doctor fields
  - _Requirements: 23.1-23.6_

- [ ] 29. Build admin dashboard - appointment management
  - Create /admin/appointments page listing all appointments
  - Build AppointmentList component with filtering by status, doctor, date range
  - Implement appointment detail view with guest contact information
  - Implement appointment cancellation with reason input
  - Send cancellation email when appointment is canceled
  - Display consultation notes for completed appointments
  - _Requirements: 24.1-24.6_


- [ ] 30. Build admin dashboard - content management
  - Create /admin/blog page for blog post management
  - Build BlogEditor component with rich text editor
  - Implement tRPC admin mutations for createBlogPost, updateBlogPost, deleteBlogPost
  - Implement featured image upload to Supabase Storage
  - Implement publish/unpublish functionality
  - Implement featured post toggle
  - Create /admin/community page for community circle management
  - Implement community circle creation and editing
  - _Requirements: 25.1-25.7_

- [ ] 31. Build admin dashboard - resource management
  - Create /admin/resources page listing all resources
  - Build ResourceUpload component for uploading files
  - Implement tRPC admin mutations for uploadResource, updateResource, deleteResource
  - Implement file upload to Supabase Storage with validation (max 50MB)
  - Implement resource metadata editing
  - Implement resource deletion with file removal from storage
  - _Requirements: 26.1-26.6_

- [ ]* 31.1 Write property test for resource deletion cascade
  - **Property 16: Resource Deletion Cascade**
  - **Validates: Requirements 26.5**

- [ ] 32. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

### Phase 6: Polish

- [ ] 33. Build homepage with all sections
  - Create / page with complete homepage layout
  - Build hero section with tagline, description, primary CTA button
  - Build "What We Offer" section with feature highlights and icons
  - Build featured doctors section displaying top-rated doctors
  - Build featured blogs section displaying recent/highlighted posts
  - Build testimonials section with user reviews and ratings
  - Ensure sensory-friendly design throughout homepage
  - _Requirements: 27.1-27.7_

- [ ] 34. Implement responsive design and mobile optimization
  - Apply mobile-first responsive design to all pages
  - Test layouts on screen sizes 320px to 2560px width
  - Optimize layouts for mobile, tablet, and desktop viewports
  - Ensure touch-friendly button sizes (minimum 44x44px) on mobile
  - Optimize images using Next.js Image component
  - Test all interactive elements on touch devices
  - _Requirements: 29.1-29.6_

- [ ]* 34.1 Write property test for touch target minimum size
  - **Property 18: Touch Target Minimum Size**
  - **Validates: Requirements 29.4**

- [ ] 35. Implement performance optimizations
  - Add loading indicators for all async operations
  - Add skeleton screens for content lists
  - Implement lazy loading for images and components below fold
  - Optimize bundle size with code splitting
  - Add caching strategies for static content
  - Implement progress indicators for requests longer than 2 seconds
  - Run Lighthouse audit and achieve 90+ performance score
  - _Requirements: 30.1-30.7_

- [ ]* 35.1 Write property test for loading indicator display
  - **Property 19: Loading Indicator Display**
  - **Validates: Requirements 30.6**

- [ ] 36. Implement comprehensive error handling
  - Implement React Error Boundaries for rendering errors
  - Add user-friendly error messages for all API errors
  - Add field-specific validation error messages for all forms
  - Create error pages for 404 and 500 errors
  - Implement toast notifications for success and error feedback
  - Ensure all error messages use plain language with actionable guidance
  - _Requirements: 31.1-31.6_


- [ ]* 36.1 Write property test for error message user-friendliness
  - **Property 20: Error Message User-Friendliness**
  - **Validates: Requirements 31.1**

- [ ] 37. Conduct accessibility audit and compliance
  - Add proper ARIA labels to all interactive elements
  - Ensure keyboard navigation works for all functionality
  - Verify color contrast ratios meet WCAG 2.1 AA standards
  - Add alt text to all images
  - Use semantic HTML elements throughout
  - Add visible focus indicators for keyboard navigation
  - Test with screen readers (NVDA, JAWS, VoiceOver)
  - Add skip navigation links for keyboard users
  - Ensure all form labels are properly associated with inputs
  - Ensure error identification is accessible
  - _Requirements: 35.1-35.10_

- [ ]* 37.1 Write property test for form label association
  - **Property 23: Form Label Association**
  - **Validates: Requirements 35.9**

- [ ] 38. Set up deployment and production configuration
  - Configure Vercel deployment with automatic deployments from main branch
  - Set up production environment variables in Vercel
  - Configure Supabase Cloud for production database and storage
  - Implement rate limiting on API routes
  - Verify HTTPS is enforced for all connections
  - Configure CORS policies
  - Add robots.txt file for search engine indexing
  - Add meta tags for SEO and social sharing
  - _Requirements: 34.1-34.8_

- [ ] 39. Final checkpoint - Comprehensive testing
  - Run all unit tests and ensure they pass
  - Run all property-based tests and ensure they pass
  - Test complete booking flow end-to-end
  - Test all 6 games for functionality and progress tracking
  - Test admin dashboard functionality
  - Test Aura AI assistant
  - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
  - Test on multiple devices (mobile, tablet, desktop)
  - Verify all email notifications are sent correctly
  - Verify video consultation system works
  - Ask the user if any issues arise

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout development
- Property tests validate universal correctness properties from the design document
- Unit tests should be added for specific examples and edge cases as needed
- All code should use TypeScript in strict mode with no "any" types
- All API routes should use tRPC with Zod validation
- All UI components should follow the sensory-friendly design system
- localStorage is used for guest data (game progress, preferences, badges)
- sessionStorage is used for temporary data (Aura chat history)
- No authentication system in current build - admin uses passphrase, visitors are anonymous
