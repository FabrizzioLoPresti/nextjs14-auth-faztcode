'use client';

import { login } from '@/actions/actions';

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="mx-auto max-w-7xl h-screen flex items-center justify-center">
      <form
        action={async (formData: FormData) => {
          await login(formData);
        }}
        className="flex flex-col gap-y-4 bg-slate-600 px-4 py-6"
      >
        <h1 className="text-center text-3xl">Auth Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="text-black" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-black"
          />
        </div>
        <button type="submit" className="w-fit self-center">
          Login
        </button>
      </form>
    </div>
  );
}
