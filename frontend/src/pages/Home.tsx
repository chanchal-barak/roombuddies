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

  useEffect(() => {
    API.get("/api/matches")
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white text-black">

      {/* ================= NAVBAR (UNCHANGED) ================= */}
      <nav className="flex justify-between items-center px-20 py-5 bg-white/70 backdrop-blur-md shadow-sm">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          Room<span className="text-purple-600">Buddies</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/compatibility")}>Compatibility</button>
          <button onClick={() => navigate("/my-profile")}>Dashboard</button>
          <button onClick={() => navigate("/hostels")}>Hostels</button>
          <button onClick={() => navigate("/safety")}>Safety</button>
          <button onClick={() => navigate("/matches")}>Matches</button>
        </div>

        <div className="flex gap-6 items-center">
          <button onClick={() => navigate("/login")}>Sign In</button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="px-20 pt-16 pb-20 text-center">
        <h1 className="text-6xl font-extrabold leading-tight max-w-5xl mx-auto">
          Find the Right <span className="text-purple-600">Roommate</span>.
          <br /> Not Just a Room.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with like-minded women, discover safe co-living spaces, and build lasting friendships through AI-powered compatibility matching.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-gray-700 font-semibold">

        {[
          "Background Verified",
          "Identity Checked",
          "24/7 Support",
          "AI Powered"
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center text-sm shadow-md">
              ✓
            </div>
            <span>{item}</span>
          </div>
        ))}

      </div>

      </section>
      {/* ================= WHY CHOOSE ================= */}
      <section className="px-20 py-24 bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose <span className="text-purple-600">Room Buddies?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the future of roommate matching with our AI-powered platform
            designed specifically for women.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-6 text-2xl">
              🛡️
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Women-Only Safety
            </h3>
            <p className="text-gray-600">
              Verified profiles and background checks ensure a safe community for women.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-100 text-pink-600 mb-6 text-2xl">
              ⚡
            </div>
            <h3 className="text-xl font-semibold mb-3">
              AI-Powered Matching
            </h3>
            <p className="text-gray-600">
              Advanced algorithms analyze compatibility based on lifestyle, habits, and preferences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6 text-2xl">
              🎙️
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Voice Preferences
            </h3>
            <p className="text-gray-600">
              Simply speak your preferences instead of filling long forms.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 mb-6 text-2xl">
              📍
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Location-Based Search
            </h3>
            <p className="text-gray-600">
              Find hostels and roommates in your preferred neighborhoods and cities.
            </p>
          </div>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="px-20 py-24 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Simple, smart and secure steps to find your perfect roommate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 text-center">

          {/* STEP 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6">
              1
            </div>

            <h3 className="text-2xl font-bold mb-4">Share Your Preferences</h3>

            <p className="text-gray-600 leading-relaxed">
              Use voice input or fill out our smart compatibility quiz.  
              Tell us about your lifestyle, sleep habits, cleanliness, work schedule,  
              and the kind of roommate energy you’re looking for.
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              🎙 Voice-based input  
              📝 Smart preference matching  
              🛡 Secure profile creation
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6">
              2
            </div>

            <h3 className="text-2xl font-bold mb-4">Get Matched</h3>

            <p className="text-gray-600 leading-relaxed">
              Our AI analyzes compatibility across personality, lifestyle,  
              budget, and safety preferences to suggest the most  
              aligned roommates in your area.
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              ⚡ AI compatibility scoring  
              📍 Location-based filtering  
              ✔ Verified profiles only
            </p>
          </div>

          {/* STEP 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6">
              3
            </div>

            <h3 className="text-2xl font-bold mb-4">Connect & Move In</h3>

            <p className="text-gray-600 leading-relaxed">
              Chat securely with your matches, schedule hostel visits together,  
              and confidently move into a safe co-living space  
              that feels like home.
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              💬 In-app messaging  
              🏠 Explore verified PGs  
              🔒 Safety-first environment
            </p>
          </div>

        </div>
      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mb-16">
          Real stories from women who found their perfect roommates
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">
          <div className="bg-purple-50 p-8 rounded-2xl shadow-lg">
            <p className="italic">
              "Found my perfect roommate within a week!"
            </p>
            <div className="mt-4 font-semibold text-purple-600">
              Ananya
            </div>
          </div>

          <div className="bg-pink-50 p-8 rounded-2xl shadow-lg">
            <p className="italic">
              "Love how safe and verified the platform is."
            </p>
            <div className="mt-4 font-semibold text-pink-600">
              Kavya
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
            <p className="italic">
              "AI matching is seriously impressive!"
            </p>
            <div className="mt-4 font-semibold text-blue-600">
              Riya
            </div>
          </div>
        </div>
      </section>

      {/* ================= WAITLIST CTA ================= */}
      <section className="px-20 py-28 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">

        {/* Soft Glow Background Blur */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

        <div className="relative max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-xl p-14 rounded-3xl shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Ready to find your perfect match?
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Join the waitlist and be the first to experience AI-powered
            roommate matching in your city.
          </p>

          {/* Input */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-purple-300 transition shadow-sm"
            />

            <button
              className="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              Join Waitlist
            </button>
          </div>

          <div className="mt-8 text-sm tracking-widest text-gray-500">
            🔒 SECURE &nbsp;•&nbsp; 💜 PRIVATE &nbsp;•&nbsp; ✨ FREE
          </div>

        </div>
      </section>


      <footer className="text-center py-10 border-t">
        © 2026 RoomBuddies • Built with React + FastAPI 🚀
      </footer>

    </div>
  );
}
