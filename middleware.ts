import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to admin routes only for admin users
        if (pathname.startsWith('/admin')) {
          return token?.role === 'admin'
        }

        // Allow access to other routes for authenticated users
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*', '/book/:path*']
}
