import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
export default function HomePage() {
  return (
    <Layout>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </Layout>
  )
}
