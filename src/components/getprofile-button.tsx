'use client';

import { useState } from 'react';

type Props = {
  getProfile: () => Promise<string>;
};

const GetProfileButton = ({ getProfile }: Props) => {
  const [email, setEmail] = useState<string | null>(null);
  return (
    <div>
      <button
        onClick={async () => {
          setEmail(await getProfile());
        }}
        className="bg-slate-600 px-4 py-2 rounded-md"
      >
        Get Profile
      </button>
      {email && <p>{email}</p>}
    </div>
  );
};

export default GetProfileButton;
