import Link from 'next/link';


export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is an app to find the latest hot sauce events.</p>
      <p>Version 1.0.0</p>
      <Link href='/'>Home</Link>
    </div>
  );
}
