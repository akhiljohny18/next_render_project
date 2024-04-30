// middleware.js
export default async function middleware(req, res) {
    // Authentication logic (replace with your implementation)
    const isAuthenticated = false; // Simulate checking for authentication
  
    if (!isAuthenticated && req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  
    // Allow the request to proceed
    return NextResponse.next();
  }
  