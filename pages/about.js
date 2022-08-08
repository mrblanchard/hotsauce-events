import Link from 'next/link';
import Layout from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout title='About hot sauce events'>
      <h1>About</h1>
      <p>This is an app to find the latest hot sauce events.</p>
      
      <Link href='/'>Home</Link>
    </Layout>
  );
}
