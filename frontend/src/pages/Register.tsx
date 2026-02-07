import { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    aadhaar: "",
    gender: "",
    phone: "",
    occupation: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    setError("");
    setSuccess("");

    try {
      await API.post("/auth/register", form);

      setSuccess("Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err: any) {
      setError(
        err.response?.data?.detail || "Registration failed. Please try again."
      );
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

      {/* FORM CARD */}
      <div className="flex flex-1 justify-center items-center py-16">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-[700px]">

          <h2 className="text-3xl font-bold text-center mb-2">
            Create Your Account
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Join our safe AI-powered roommate community
          </p>

          {/* SUCCESS CARD */}
          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700 border border-green-300">
              {success}
            </div>
          )}

          {/* ERROR CARD */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700 border border-red-300">
              {error}
            </div>
          )}

          {/* FORM FIELDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              placeholder="Full Name"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              type="email"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
              placeholder="Password"
              type="password"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <input
              type="date"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />

            <input
              placeholder="Aadhaar Number"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, aadhaar: e.target.value })}
            />

            <input
              placeholder="Phone Number"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <select
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
            >
              <option value="">Select Gender</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>

            <input
              placeholder="Occupation"
              className="p-3 border rounded-lg focus:outline-none focus:border-purple-500"
              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
            />

          </div>

          <button
            onClick={handleRegister}
            className="w-full mt-10 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:scale-105 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
