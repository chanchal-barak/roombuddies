import { useNavigate, useLocation } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const linkStyle = (path: string) =>
    `cursor-pointer transition ${
      location.pathname === path
        ? "text-purple-600 font-semibold"
        : "text-gray-700 hover:text-purple-600"
    }`;

  return (
    <nav className="flex justify-between items-center px-20 py-5 bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer"
      >
        Room<span className="text-purple-600">Buddies</span>
      </h1>

      {/* Center Links */}
      <div className="hidden md:flex gap-10 text-sm font-medium">

        <span
          onClick={() => navigate("/")}
          className={linkStyle("/")}
        >
          Home
        </span>

        <span
          onClick={() => navigate("/my-profile")}
          className={linkStyle("/my-profile")}
        >
          Dashboard
        </span>

        <span
          onClick={() => navigate("/compatibility")}
          className={linkStyle("/compatibility")}
        >
          Compatibility
        </span>
        <span
            onClick={() => navigate("/matches")}
            className={linkStyle("/matches")}
        >
            Matches
        </span>

        <span
          onClick={() => navigate("/hostels")}
          className={linkStyle("/hostels")}
        >
          Hostels
        </span>

        {/* ✅ ADDED SAFETY */}
        <span
          onClick={() => navigate("/safety")}
          className={linkStyle("/safety")}
        >
          Safety
        </span>

      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-6 items-center">
        {isLoggedIn() ? (
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-700 hover:text-purple-600"
            >
              Sign In
            </button>

            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:scale-105 transition"
            >
              Get Started
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
