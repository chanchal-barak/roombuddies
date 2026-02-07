import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white text-black overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-20 py-5 bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
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
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:scale-110 hover:shadow-xl transition"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative px-20 pt-20 pb-28 text-center">

        {/* Floating Glow Blobs */}
        <div className="absolute top-10 left-20 w-72 h-72 bg-pink-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-32 w-80 h-80 bg-purple-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Find the Right{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Roommate
          </span>
          <br /> Not Just a Room.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Connect with like-minded women, discover safe co-living spaces, and build lasting friendships through AI-powered compatibility matching.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition">
            Start Voice Matching 🎙️
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="px-20 py-24 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Why Choose{" "}
          <span className="text-purple-600">Room Buddies?</span>
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-16">
          Experience the future of roommate matching with our AI-powered platform designed specifically for women.
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
              className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl">
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

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t text-gray-600">
        © 2026 CoLive • Built with React + Tailwind ✨
      </footer>
    </div>
  );
}
