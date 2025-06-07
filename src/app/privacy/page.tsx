'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Oruphones does not collect any personal user data. Anonymous browsing behavior may be tracked (like pages visited or scroll percentage) only for learning and dashboard visualization purposes. Your data is not shared or sold to any third parties.
        </p>
      </main>
      <Footer />
    </>
  );
}