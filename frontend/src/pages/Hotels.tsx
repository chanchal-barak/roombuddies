import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Hostel {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  price: string;
  description: string;
  amenities: string[];
  rooms: number;
  matches: number;
}

const hostels: Hostel[] = [
  {
    id: "1",
    name: "Harmony House Co-Living",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
    rating: 4.8,
    reviews: 124,
    distance: "0.3 miles away",
    price: "$800-1200/month",
    description:
      "Modern co-living space designed specifically for women professionals.",
    amenities: ["Wifi", "Parking", "Gym", "Cafe"],
    rooms: 3,
    matches: 8,
  },
  {
    id: "2",
    name: "The Nest Women's Hostel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    rating: 4.7,
    reviews: 89,
    distance: "0.7 miles away",
    price: "$600-900/month",
    description:
      "Cozy women-only accommodation with focus on safety and community.",
    amenities: ["Wifi", "Cafe", "Garden", "Library"],
    rooms: 5,
    matches: 12,
  },
];

export default function Hostels() {
  const [saved, setSaved] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleSave = (id: string) => {
    setSaved((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-10 py-16 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative flex justify-between items-center mb-14">
        <div className="text-center w-full">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Discover Perfect Places
          </h1>
          <p className="text-gray-600 text-lg">
            Find hostels and co-living spaces with potential roommates nearby
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute right-0 px-6 py-3 bg-white shadow-md rounded-full hover:shadow-lg transition font-medium text-purple-600"
        >
          ← Back
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {["Near Me", "Most Matches", "Highest Rated", "Women Only"].map((f) => (
          <button
            key={f}
            className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 hover:border-purple-500 hover:text-purple-600 transition shadow-sm"
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
        {hostels.map((h) => (
          <div
            key={h.id}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="relative h-64">
              <img
                src={h.image}
                alt={h.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm shadow-md">
                {h.rooms} rooms available
              </div>

              <button
                onClick={() => toggleSave(h.id)}
                className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
              >
                {saved.includes(h.id) ? "💜" : "🤍"}
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold">{h.name}</h2>
                <div className="text-yellow-500 font-semibold">
                  ⭐ {h.rating} ({h.reviews})
                </div>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>📍 {h.distance}</span>
                <span className="font-semibold text-purple-700">{h.price}</span>
              </div>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {h.description}
              </p>

              {/* Amenities */}
              <div className="flex flex-wrap gap-3 mb-6">
                {h.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-1 rounded-full text-xs font-medium"
                  >
                    {a}
                  </span>
                ))}
              </div>

              {/* Matches Box */}
              <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 text-purple-800 p-5 rounded-2xl flex justify-between items-center mb-6 shadow-sm">
                <span className="font-medium">
                  👭 {h.matches} potential roommates here
                </span>
                <button className="font-semibold text-purple-700 hover:underline">
                  View Matches →
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
                  View Details
                </button>
                <button className="flex-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white py-3 rounded-xl hover:scale-105 shadow-md transition">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-16">
        <button className="px-10 py-4 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-105 transition font-medium text-purple-600">
          Load More Hostels
        </button>
      </div>
    </div>
  );
}
