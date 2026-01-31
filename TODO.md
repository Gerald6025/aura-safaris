# Booking System Implementation TODO

- [x] Update package.json: Remove Prisma dependencies, add mongoose and @types/mongoose
- [x] Create lib/models/User.ts Mongoose model
- [x] Create lib/models/Booking.ts Mongoose model (include bookingDate, service fields)
- [x] Update lib/db.ts: Connect to MongoDB using Mongoose
- [x] Update lib/auth.ts: Remove PrismaAdapter, use Mongoose for user queries
- [x] Update app/api/auth/signup/route.ts to use Mongoose
- [x] Create app/api/bookings/route.ts (POST for create booking, GET for user bookings)
- [x] Update app/api/bookings/[id]/route.ts to use Mongoose
- [x] Create app/api/admin/bookings/route.ts (GET all bookings)
- [x] Create middleware.ts: Protect admin routes
- [x] Update app/book/page.tsx for creating bookings
- [x] Update app/admin/page.tsx for admin dashboard
- [x] Create .env: Add MONGODB_URI
- [x] Install dependencies
- [x] Test the application
