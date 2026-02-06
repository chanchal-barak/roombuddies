import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";


type Match = {
  name: string;
  city: string;
  budget: number;
};

export default function Home() {
  const [matches, setMatches] = useState<Match[]>([]);
  const navigate = useNavigate();


  // Fetch matches from FastAPI backend
  useEffect(() => {
    API.get("/api/matches")
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log("Backend Error:", err);
      });
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-600">
          ❤️ Room Buddies
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Dashboard</li>
          <li className="hover:text-pink-500 cursor-pointer">
            Compatibility
          </li>
          <li className="hover:text-pink-500 cursor-pointer">Matches</li>
          <li className="hover:text-pink-500 cursor-pointer">Hostels</li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
            Sign In
            </button>

            <button
            onClick={() => navigate("/register")}
            className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
            Get Started
            </button>

        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-24 px-4">
        <h1 className="text-6xl font-extrabold text-pink-500">
          Find Your Perfect Room Buddy
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with like-minded students, discover safe PG spaces,
          and build friendships through AI-powered compatibility matching.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => navigate("/profile")}
            className="px-8 py-3 bg-pink-500 text-white rounded-xl shadow-lg hover:bg-pink-600"
            >
            🎤 Start Matching
            </button>
          
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-pink-500">10,000+</h2>
            <p className="text-gray-500 mt-2">Happy Roommates</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-orange-500">500+</h2>
            <p className="text-gray-500 mt-2">Verified PGs</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-blue-500">50+</h2>
            <p className="text-gray-500 mt-2">Cities Covered</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-3xl font-bold text-green-500">98%</h2>
            <p className="text-gray-500 mt-2">Match Accuracy</p>
          </div>
        </div>

        {/* ================= MATCHES SECTION ================= */}
        <div className="mt-24 max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-pink-500 text-center">
            Suggested Matches
          </h2>

          <p className="text-gray-600 text-center mt-3">
            These roommates are fetched live from your FastAPI backend.
          </p>

          {/* Match Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {matches.length === 0 ? (
              <p className="text-center col-span-3 text-gray-500">
                Loading matches...
              </p>
            ) : (
              matches.map((m, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="text-gray-500 mt-1">{m.city}</p>

                  <p className="text-gray-700 font-medium mt-3">
                    Budget: ₹{m.budget}
                  </p>

                  <button className="mt-5 w-full py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition">
                    View Profile
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 mt-20 bg-white border-t">
        <p className="text-gray-500">
          © 2026 Room Buddies • Built with React + FastAPI 🚀
        </p>
      </footer>
    </div>
  );
}
