import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // ✅ Mock user (frontend-only)
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    // Load logged-in user from LocalStorage (if exists)
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name || "User");
    }
  }, []);

  // ✅ Mock Stats Data
  const stats = [
    { label: "Total Matches", value: "12" },
    { label: "New Messages", value: "3" },
    { label: "Saved Hostels", value: "5" },
    { label: "Match Score", value: "94%" },
  ];

  // ✅ Mock Matches Data
  const recentMatches = [
    {
      name: "Ujjwal Agarwal",
      msg: "Hey! Would love to chat about the apartment",
      time: "2h ago",
    },
    {
      name: "Himanshi Agarwal",
      msg: "When would be good for a coffee?",
      time: "1d ago",
    },
    {
      name: "Maaz Anwar",
      msg: "Thanks for the hostel recommendation!",
      time: "3d ago",
    },
    {
      name: "Pooja Kumari",
      msg: "Yo! Remember me?",
      time: "4d ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 px-10 py-16">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start mb-12">
        
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {userName}
            </span>{" "}
            👋
          </h1>

          <p className="text-gray-600 mt-2">
            This is a mock dashboard (frontend-only).
          </p>
        </div>

        {/* Right Side Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-white shadow-md rounded-full hover:shadow-lg transition font-medium text-purple-600"
        >
          ← Back
        </button>
      </div>


      {/* ================= STATS CARDS ================= */}
      <div className="grid md:grid-cols-4 gap-6 mb-14">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <h2 className="text-3xl font-bold">{s.value}</h2>
            <p className="text-gray-600 mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* LEFT SIDE - RECENT MATCHES */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Recent Matches</h2>

          {recentMatches.map((m, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-gray-600 text-sm">{m.msg}</p>
                <p className="text-xs text-gray-400 mt-1">{m.time}</p>
              </div>

              {/* Mock Buttons */}
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition">
                  💬
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition">
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
              onClick={() => alert("Mock Feature: Matches Page")}
              className="w-full py-3 mb-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
            >
              Find New Matches
            </button>

            <button
              onClick={() => alert("Mock Feature: Hostels Page")}
              className="w-full py-3 mb-4 rounded-lg bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold hover:scale-105 transition"
            >
              Browse Hostels
            </button>

            <button
              onClick={() => alert("Mock Feature: Tour Scheduling")}
              className="w-full py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
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
              <div className="h-3 rounded-full w-[85%] bg-purple-500"></div>
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
