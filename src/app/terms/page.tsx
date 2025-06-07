'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 mb-4">
          This project is created for educational purposes as part of the ORU internship assignment. All content, brand logos,
          and product names belong to their respective owners. This site is not intended for actual commercial use.
        </p>
      </main>
      <Footer />
    </>
  );
}