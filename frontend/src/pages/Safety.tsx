import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Safety() {
  const navigate = useNavigate();
  const [reported, setReported] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-20 py-16 relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative flex justify-between items-center mb-14">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Safety Hub
          </h1>
          <p className="text-gray-600 text-lg">
            Your safety is our top priority. Stay secure. Stay confident.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-white shadow-md rounded-full hover:shadow-lg transition font-medium text-purple-600"
        >
          ← Back
        </button>
      </div>

      {/* Grid */}
      <div className="relative grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Verified Roommate Badge */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <div className="text-4xl mb-4 text-purple-600">✔️</div>
          <h2 className="text-xl font-bold mb-2">Verified Roommate Badge</h2>
          <p className="text-gray-600 mb-4">
            Profiles with verified ID and background checks receive a trusted badge.
          </p>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full inline-block text-sm shadow">
            Verified ✓
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <div className="text-4xl mb-4 text-red-500">🚨</div>
          <h2 className="text-xl font-bold mb-2">Emergency Contact</h2>
          <p className="text-gray-600 mb-4">
            Instantly notify your emergency contact in case of unsafe situations.
          </p>
          <button className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:scale-105 transition shadow-md">
            Alert Emergency Contact
          </button>
        </div>

        {/* PG Safety Rating */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <div className="text-4xl mb-4 text-yellow-500">⭐</div>
          <h2 className="text-xl font-bold mb-2">PG Safety Rating</h2>
          <p className="text-gray-600 mb-4">
            Each hostel and PG is rated based on safety, CCTV, security guards and reviews.
          </p>
          <div className="text-purple-600 font-semibold text-lg">
            Average Rating: 4.6 / 5
          </div>
        </div>

        {/* Report Unsafe Listing */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
          <div className="text-4xl mb-4 text-orange-500">⚠️</div>
          <h2 className="text-xl font-bold mb-2">Report Unsafe Listing</h2>
          <p className="text-gray-600 mb-4">
            Flag suspicious profiles or unsafe accommodations immediately.
          </p>

          {!reported ? (
            <button
              onClick={() => setReported(true)}
              className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white rounded-xl hover:scale-105 transition shadow-md"
            >
              Report Now
            </button>
          ) : (
            <div className="bg-green-100 text-green-700 p-3 rounded-xl text-center font-medium">
              Report Submitted Successfully ✓
            </div>
          )}
        </div>

        {/* Background Verification Status */}
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-lg hover:shadow-2xl transition md:col-span-2">
          <div className="text-4xl mb-4 text-blue-500">🔒</div>
          <h2 className="text-xl font-bold mb-2">
            Background Verification Status
          </h2>
          <p className="text-gray-600 mb-6">
            Check whether your profile verification is complete.
          </p>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-4 rounded-full w-3/4"></div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Verification 75% Complete
          </div>

          <button
            onClick={() => navigate("/create-profile")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white rounded-xl hover:scale-105 transition shadow-md"
          >
            Complete Verification
          </button>
        </div>

      </div>
    </div>
  );
}
