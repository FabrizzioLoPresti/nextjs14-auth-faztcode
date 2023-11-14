'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async (formData: FormData) => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      cache: 'no-cache',
    });

    const data = await res.json();
    if (!data.token) {
      // throw new Error(data.message);
      return console.error(data.message);
    }

    cookies().set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      path: '/',
      expires: new Date(Date.now() + 60 * 60 * 1000),
      maxAge: 60 * 60,
      name: 'token',
      value: data.token,
      sameSite: 'lax',
    });
  } catch (error) {
    console.error(error);
  } finally {
    redirect('/');
  }
};

export const getProfile = async () => {
  try {
    const token = cookies().get('token');
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token?.value ?? '',
      },
      cache: 'no-cache',
      next: {
        tags: ['profile'],
      }
    });

    const data = await res.json();
    return data.email ?? 'Not logged in';
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  cookies().set('token', '', { expires: new Date(0) });
  redirect('/login');
};