import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  if (
    url === '/nudes-trade-telegram' || 
    url === '/adult-movies-telegram-link' || 
    url === '/blog/nudes-trade-telegram' || 
    url === '/blog/adult-movies-telegram-link' ||
    url === '/services/adu-construction//adult-movies-telegram-link'
  ) {
    return new NextResponse('Gone', { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
