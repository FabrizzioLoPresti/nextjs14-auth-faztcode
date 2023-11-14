import Link from 'next/link';
import LogOutButton from './logout-button';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-row items-center justify-between mx-auto max-w-7xl py-4">
      <Link href="/">Home</Link>

      <div className="flex flex-row items-center gap-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
        <LogOutButton />
      </div>
    </nav>
  );
};

export default Navbar;
