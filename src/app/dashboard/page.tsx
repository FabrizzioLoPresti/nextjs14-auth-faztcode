import React from 'react';

type Props = {};

export default function DashboardPage({}: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="text-3xl text-center">Dashboard Page</h1>
      <p className="font-bold">Protected Route</p>
    </div>
  );
}
