import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Match = {
  name: string;
  city: string;
  budget: number;
};

export default function Home() {
  const navigate = useNavigate();

  // ✅ Mock Matches Data
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    setMatches([
      { name: "Ananya Sharma", city: "Delhi", budget: 8000 },
      { name: "Riya Singh", city: "Mumbai", budget: 10000 },
      { name: "Kavya Verma", city: "Bangalore", budget: 12000 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white text-black overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-20 py-5 bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 fade-down">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer hover:scale-105 transition"
        >
          Co<span className="text-purple-600">Live</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/compatibility")}>
            Compatibility
          </button>
          <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button onClick={() => navigate("/hostels")}>Hostels</button>
          <button onClick={() => navigate("/safety")}>Safety</button>
          <button onClick={() => navigate("/matches")}>Matches</button>
        </div>

        <div className="flex gap-6 items-center">
          <button onClick={() => navigate("/login")}>Sign In</button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:scale-110 hover:shadow-xl transition animate-pulseSoft"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative px-20 pt-20 pb-28 text-center">

        {/* Floating Glow Blobs */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-10 right-32 w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl animate-floatSlow"></div>

        {/* Floating Icons */}
        <div className="absolute top-28 left-1/4 text-4xl opacity-30 animate-floatFast">
          ✨
        </div>
        <div className="absolute top-44 right-1/4 text-4xl opacity-30 animate-floatFast">
          💜
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight fade-up">
          Find the Right{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Roommate
          </span>
          <br /> Not Just a Room.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto fade-up delay-200">
          Connect with like-minded women, discover safe co-living spaces, and build lasting friendships through AI-powered compatibility matching.
        </p>

        <div className="mt-10 flex justify-center gap-6 fade-up delay-400">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition animate-glow">
            Start Voice Matching 🎙️
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="px-20 py-24 bg-white text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Why Choose{" "}
          <span className="text-purple-600">Room Buddies?</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16">
          Experience the future of roommate matching with our AI-powered platform
          designed specifically for women.
        </p>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            {
              icon: "🛡️",
              title: "Women-Only Safety",
              desc: "Verified profiles and background checks ensure a safe community.",
            },
            {
              icon: "⚡",
              title: "AI-Powered Matching",
              desc: "Algorithms analyze compatibility based on lifestyle and habits.",
            },
            {
              icon: "🎙️",
              title: "Voice Preferences",
              desc: "Speak your preferences instead of filling long forms.",
            },
            {
              icon: "📍",
              title: "Location-Based Search",
              desc: "Find hostels and roommates in your preferred city.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-4 hover:shadow-2xl transition duration-500 animate-cardPop"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl animate-bounceSoft">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="px-20 py-24 bg-gradient-to-b from-purple-50 to-white text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-4">
          How It Works
        </h2>

        <p className="text-gray-600 mb-16 text-base md:text-lg">
          Simple, smart and secure steps to find your perfect roommate
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              step: "1",
              title: "Share Your Preferences",
              desc: "Tell us about your lifestyle, habits and roommate energy.",
            },
            {
              step: "2",
              title: "Get Matched",
              desc: "Our AI suggests the most aligned roommates in your area.",
            },
            {
              step: "3",
              title: "Connect & Move In",
              desc: "Chat securely, explore hostels and move in confidently.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500 animate-cardPop"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center text-3xl font-bold mb-8 animate-glow">
                {s.step}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-24 bg-white text-center fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          What Our Users Say
        </h2>

        <p className="text-gray-600 mb-16 text-base md:text-lg">
          Real stories from women who found their perfect roommates
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">
          {[
            { quote: "Found my perfect roommate within a week!", name: "Ananya" },
            { quote: "Love how safe and verified the platform is.", name: "Kavya" },
            { quote: "AI matching is seriously impressive!", name: "Riya" },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-purple-50 p-10 rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-500 animate-cardPop"
            >
              <p className="italic text-base md:text-lg mb-6">
                "{t.quote}"
              </p>
              <h3 className="font-bold text-purple-600 text-lg">
                {t.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WAITLIST CTA ================= */}
      <section className="px-20 py-28 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 flex justify-center fade-up">
        <div className="bg-white/80 backdrop-blur-xl p-16 rounded-3xl shadow-2xl text-center max-w-4xl w-full animate-glow">

          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Ready to find your perfect match?
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-10">
            Join the waitlist and be the first to experience AI-powered roommate
            matching in your city.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <input
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-8 py-4 rounded-full border shadow-sm focus:ring-4 focus:ring-purple-300 outline-none"
            />

            <button className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-110 transition animate-pulseSoft">
              Join Waitlist
            </button>
          </div>

          <div className="mt-8 text-gray-500 tracking-widest text-sm">
            🔒 SECURE • 💜 PRIVATE • ✨ FREE
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t text-gray-600">
        © 2026 CoLive • Built with React + Tailwind ✨
      </footer>
    </div>
  );
}
