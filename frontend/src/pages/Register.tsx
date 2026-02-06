import { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);

      alert("Registered Successfully!");

      // ✅ Redirect to login page
      navigate("/login");
    } catch (err: any) {
      alert("Registration Failed!");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          Register
        </h2>

        <input
          placeholder="Name"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

