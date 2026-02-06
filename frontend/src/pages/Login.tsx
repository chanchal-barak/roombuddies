import { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);

      // ✅ Save JWT Token
      localStorage.setItem("token", res.data.access_token);

      alert("Login Successful!");

      // ✅ Redirect to profile page
      navigate("/profile");
    } catch (err: any) {
      alert("Invalid Email or Password!");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          Login
        </h2>

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
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
