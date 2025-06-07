'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { trackUserActivity } from '../../lib/tracker';
interface Product {
  _id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export default function DealsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    trackUserActivity('deals', false); // or true if logged in
      return () => {};
       }, []);
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white rounded shadow p-4 space-y-4">
          <h2 className="text-xl font-semibold">Filter</h2>
          <div>
            <p className="font-medium">Brand</p>
            <div className="space-y-1 pt-1 text-sm">
              <label><input type="checkbox" className="mr-2" />Apple</label><br />
              <label><input type="checkbox" className="mr-2" />Samsung</label><br />
              <label><input type="checkbox" className="mr-2" />OnePlus</label>
            </div>
          </div>
          <div>
            <p className="font-medium">Price</p>
            <div className="space-y-1 pt-1 text-sm">
              <label><input type="checkbox" className="mr-2" />Below ₹50,000</label><br />
              <label><input type="checkbox" className="mr-2" />₹50,000 - ₹80,000</label><br />
              <label><input type="checkbox" className="mr-2" />Above ₹80,000</label>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full">Apply Filters</button>
        </aside>

        {/* Product Grid */}
        <section className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          {loading ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div className="bg-white p-4 rounded shadow hover:shadow-md cursor-pointer">
                  <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-2" />
                  <h3 className="text-lg font-semibold">{product.brand} {product.title}</h3>
                  <p className="text-gray-600">₹{product.price}</p>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
              </Link>
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}