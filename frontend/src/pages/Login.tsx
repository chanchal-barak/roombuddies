import { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.access_token);

      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/profile");
      }, 1500);

    } catch (err: any) {
      setError(
        err.response?.data?.detail || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white flex flex-col">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-20 py-5 bg-white/70 backdrop-blur-md shadow-sm">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          Room<span className="text-purple-600">Buddies</span>
        </h1>

        <button
          onClick={() => navigate("/")}
          className="text-purple-600 hover:underline"
        >
          ← Back to Home
        </button>
      </nav>

      {/* LOGIN CARD */}
      <div className="flex flex-1 justify-center items-center">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

          <h2 className="text-3xl font-bold text-center mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-center mb-6">
            Sign in to continue to your dashboard
          </p>

          {/* SUCCESS CARD */}
          {success && (
            <div className="mb-4 p-4 rounded-lg bg-green-100 text-green-700 border border-green-300">
              {success}
            </div>
          )}

          {/* ERROR CARD */}
          {error && (
            <div className="mb-4 p-4 rounded-lg bg-red-100 text-red-700 border border-red-300">
              {error}
            </div>
          )}

          <input
            placeholder="Email"
            type="email"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:border-purple-500"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:border-purple-500"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white transition 
              ${loading 
                ? "bg-purple-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105"}
            `}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
