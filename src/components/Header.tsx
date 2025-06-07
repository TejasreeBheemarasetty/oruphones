export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-xl font-bold">ORU Phones</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/deals" className="hover:underline">Best Deals</a>
          <a href="/admin" className="hover:underline">Admin</a>
        </nav>
      </div>
    </header>
  );
}