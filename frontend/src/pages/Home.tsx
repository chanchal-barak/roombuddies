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
      {/* ============== WHY CHOOSE ROOM BUDDIES ============= */}
      <section className="px-20 py-28 bg-white text-center">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold mb-6">
          Why Choose{" "}
          <span className="text-purple-600">Room Buddies?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-20">
          Experience the future of roommate matching with our AI-powered platform designed specifically
          for women.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Card 1 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12 hover:-translate-y-3 transition duration-500">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl">
              🛡️
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Women-Only Safety
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Verified profiles and background checks ensure a safe community.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12 hover:-translate-y-3 transition duration-500">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl">
              ⚡
            </div>

            <h3 className="text-2xl font-bold mb-4">
              AI-Powered Matching
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Algorithms analyze compatibility based on lifestyle and habits.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12 hover:-translate-y-3 transition duration-500">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl">
              🎙️
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Voice Preferences
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Speak your preferences instead of filling long forms.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12 hover:-translate-y-3 transition duration-500">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-purple-50 text-3xl">
              📍
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Location-Based Search
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Find hostels and roommates in your preferred city.
            </p>
          </div>

        </div>
      </section>




      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="px-20 pb-32 text-center">
        <h2 className="text-6xl font-extrabold text-pink-500 mb-4">
          How It Works
        </h2>

        <p className="text-gray-600 text-lg mb-20">
          Simple, smart and secure steps to find your perfect roommate
        </p>

        <div className="grid md:grid-cols-3 gap-12">

          {/* Step 1 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-14 hover:-translate-y-3 transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
              1
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Share Your Preferences
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Use voice input or fill out our smart compatibility quiz. Tell us about your lifestyle, habits, cleanliness, and roommate vibe.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              🎙 Voice Input • 🔒 Secure Profile
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-14 hover:-translate-y-3 transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
              2
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Get Matched
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our AI analyzes compatibility across lifestyle, personality, budget, and safety preferences to suggest best matches.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              ⚡ AI Scoring • 📍 Location Filtering
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-14 hover:-translate-y-3 transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
              3
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Connect & Move In
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Chat securely with your matches, explore verified PGs, and confidently move into a safe co-living space.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              💬 Messaging • 🏠 Verified PGs
            </p>
          </div>
        </div>
      </section>

            {/* ================= WAITLIST SECTION ================= */}
      <section className="px-20 pb-28">
        <div className="max-w-5xl mx-auto bg-white/80 rounded-[3rem] shadow-2xl p-20 text-center">

          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Ready to find your perfect match?
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Join the waitlist and be the first to experience AI-powered roommate matching in your city.
          </p>

          {/* Input + Button */}
          <div className="mt-12 flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[420px] px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            />

            <button
              onClick={() => alert("Waitlist feature coming soon!")}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Join Waitlist
            </button>
          </div>

          {/* Secure Private Free */}
          <div className="mt-10 flex justify-center gap-8 text-gray-500 text-sm font-medium">
            <span>🔒 SECURE</span>
            <span>💜 PRIVATE</span>
            <span>✨ FREE</span>
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
