'use client';

import { logout } from '@/actions/actions';

type Props = {};

const LogOutButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
