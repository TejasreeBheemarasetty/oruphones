'use client';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Oruphones</h1>
        <p className="text-gray-600 mb-6">Discover the latest mobile deals from top brands.</p>
        <Link href="/deals">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Explore Deals</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}