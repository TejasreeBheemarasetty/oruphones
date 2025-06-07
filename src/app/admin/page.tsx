'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    price: '',
    image: '',
    description: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseInt(formData.price)
        })
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ title: '', brand: '', price: '', image: '', description: '' });
      } else {
        setError('Failed to add product');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <input name="brand" placeholder="Brand" value={formData.brand} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
      </form>
      {success && <p className="text-green-600 mt-2">✅ Product added successfully!</p>}
      {error && <p className="text-red-600 mt-2">❌ {error}</p>}
    </main>
  );
}