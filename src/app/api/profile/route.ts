import { NextResponse, NextRequest } from "next/server";
import { headers } from 'next/headers'
import jwt from "jsonwebtoken";

const dynamic = 'force-dynamic'

export const GET = async (req: NextRequest) => {
  // const requestHeaders = new Headers(req.headers)
  const token = headers().get('authorization');
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const decoded: any= jwt.verify(token, "secret");
  if(!decoded) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ email: decoded.email }, { status: 200 });
};