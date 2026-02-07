import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-10 py-16">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome back, <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Nishchay</span> 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Let’s find your perfect roommate match
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-full border hover:bg-white transition"
        >
          ← Back Home
        </button>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid md:grid-cols-4 gap-6 mb-14">

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-pink-500">12</h2>
          <p className="text-gray-600 mt-2">Total Matches</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-orange-500">3</h2>
          <p className="text-gray-600 mt-2">New Messages</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-blue-500">5</h2>
          <p className="text-gray-600 mt-2">Saved Hostels</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
          <h2 className="text-3xl font-bold text-green-500">94%</h2>
          <p className="text-gray-600 mt-2">Match Score</p>
        </div>

      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE - RECENT MATCHES */}
        <div className="md:col-span-2 space-y-6">

          <h2 className="text-2xl font-bold mb-4">Recent Matches</h2>

          {[
            { name: "Ujjwal Agarwal", msg: "Hey! Would love to chat about the apartment", time: "2h ago" },
            { name: "Himanshi Agarwal", msg: "When would be good for a coffee?", time: "1d ago" },
            { name: "Maaz Anwar", msg: "Thanks for the hostel recommendation!", time: "3d ago" },
            { name: "Pooja Kumari", msg: "Yo Nishchay, remember me?", time: "4d ago" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-gray-600 text-sm">{m.msg}</p>
                <p className="text-xs text-gray-400 mt-1">{m.time}</p>
              </div>

              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-200 transition">
                  💬
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center hover:bg-pink-200 transition">
                  💖
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* QUICK ACTIONS */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>

            <button
              onClick={() => navigate("/matches")}
              className="w-full py-3 mb-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
            >
              Find New Matches
            </button>

            <button
              onClick={() => navigate("/hostels")}
              className="w-full py-3 mb-4 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold hover:scale-105 transition"
            >
              Browse Hostels
            </button>

            <button className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
              Schedule Tour
            </button>
          </div>

          {/* PROFILE COMPLETION */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Profile Completion</h3>

            <div className="flex justify-between text-sm mb-2">
              <span>Profile Progress</span>
              <span className="font-semibold">85%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full w-[85%]"></div>
            </div>

            <button
              onClick={() => navigate("/create-profile")}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition"
            >
              Complete Profile
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
