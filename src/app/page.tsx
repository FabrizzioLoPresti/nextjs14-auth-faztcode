import GetProfileButton from '@/components/getprofile-button';
import { getProfile } from '@/actions/actions';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <h1 className="text-center text-3xl">Auth Login with JWT</h1>
      <GetProfileButton getProfile={getProfile} />
    </main>
  );
}
