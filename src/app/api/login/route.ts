import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const dynamic = 'force-dynamic'

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  if(email === 'admin@local.com' && password === 'admin') {
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1h' });
    return NextResponse.json({ token }, { status: 200 });
  }

  return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
};
