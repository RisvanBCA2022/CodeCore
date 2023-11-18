
import { getCookie } from 'cookies-next';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req) {
  const cookie=getCookie('jwt_admin')

  if (!cookie) {
    return NextResponse.redirect('http://localhost:3000/user/login#success');
  }

  return NextResponse.next();
}
