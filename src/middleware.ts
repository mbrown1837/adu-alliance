import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();
  const protocol = request.headers.get('x-forwarded-proto')?.split(',')[0].trim() || request.nextUrl.protocol.replace(':', '');
  if (host === 'www.adualliance.com' || (host === 'adualliance.com' && protocol === 'http')) {
    const target = request.nextUrl.clone();
    target.protocol = 'https:';
    target.hostname = 'adualliance.com';
    target.port = '';
    return NextResponse.redirect(target, 301);
  }
  const legacyServices: Record<string, string> = {
    '/services/adu-remodeling': '/services/adu-design',
    '/services/adu-architecture': '/services/adu-design',
    '/services/adu-designing': '/services/adu-design',
    '/services/adu-construction': '/services/detached-adu',
    '/services/adu-consultation': '/free-feasibility',
    '/services/adu-permitting': '/services/adu-permits',
    '/services/adu-regulatory-assistance': '/services/adu-permits',
  };
  const legacyPath = url.replace(/\/$/, '');
  if (Object.hasOwn(legacyServices, legacyPath)) {
    const target = request.nextUrl.clone();
    target.pathname = legacyServices[legacyPath];
    return NextResponse.redirect(target, 301);
  }
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
