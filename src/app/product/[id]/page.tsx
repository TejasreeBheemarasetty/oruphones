'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { trackUserActivity } from '../../../lib/tracker';
interface Product {
  _id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductInfoPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    trackUserActivity('deals', false); // or true if logged in
      return () => {};
       }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!product) return <p className="p-4 text-red-500">Product not found</p>;

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={product.image} alt={product.title} className="w-full md:w-1/2 rounded shadow" />
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">{product.brand} {product.title}</h1>
            <p className="text-xl text-green-600 font-semibold">₹{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Now</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Contact Seller</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Save</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}