'use client';
import { useEffect, useState } from 'react';

interface Tracker {
  _id: string;
  sessionId: string;
  page: string;
  scroll: number;
  browser: string;
  screen: string;
  isMobile: boolean;
  isLoggedIn: boolean;
  timestamp: string;
}

export default function DashboardPage() {
  const [trackers, setTrackers] = useState<Tracker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/track')
      .then(res => res.json())
      .then(data => {
        setTrackers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load tracker data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">📊 User Activity Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : trackers.length === 0 ? (
        <p>No data found</p>
      ) : (
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Session</th>
              <th className="border px-2 py-1">Page</th>
              <th className="border px-2 py-1">Scroll %</th>
              <th className="border px-2 py-1">Browser</th>
              <th className="border px-2 py-1">Screen</th>
              <th className="border px-2 py-1">Mobile</th>
              <th className="border px-2 py-1">Logged In</th>
              <th className="border px-2 py-1">Time</th>
            </tr>
          </thead>
          <tbody>
            {trackers.map(t => (
              <tr key={t._id}>
                <td className="border px-2 py-1">{t.sessionId.slice(0, 8)}...</td>
                <td className="border px-2 py-1">{t.page}</td>
                <td className="border px-2 py-1">{t.scroll}%</td>
                <td className="border px-2 py-1">{t.browser.slice(0, 20)}</td>
                <td className="border px-2 py-1">{t.screen}</td>
                <td className="border px-2 py-1">{t.isMobile ? 'Yes' : 'No'}</td>
                <td className="border px-2 py-1">{t.isLoggedIn ? '✅' : '❌'}</td>
                <td className="border px-2 py-1">{new Date(t.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}