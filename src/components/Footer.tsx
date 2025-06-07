import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 ORU Phones. All rights reserved.</p>
      <div className="text-sm text-center text-gray-600 mt-6">
  <Link href="/about" className="bg-gray-900 text-white p-4 mt-10 hover:underline px-2">About</Link>|
  <Link href="/privacy" className="bg-gray-900 text-white p-4 mt-10 hover:underline px-2">Privacy</Link>|
  <Link href="/terms" className="bg-gray-900 text-white p-4 mt-10 hover:underline px-2">Terms</Link>
</div>
      </div>

    </footer>
  );
}