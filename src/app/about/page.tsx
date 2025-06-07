'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">About Oruphones</h1>
        <p className="text-gray-700">
          Oruphones is a smart mobile phone comparison and ecommerce platform where users can explore, compare, and shop
          the latest phones from top brands. Built as part of an internship assignment, this website combines a real backend,
          frontend, tracking, and admin dashboard — making it a full-stack solution.
        </p>
      </main>
      <Footer />
    </>
  );
}