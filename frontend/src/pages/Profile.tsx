import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

export default function Profile() {
  const navigate = useNavigate();

  // ✅ Protect page (only logged-in users)
  useEffect(() => {
    if (!isLoggedIn()) {
      alert("Please login first!");
      navigate("/login");
    }
  }, []);

  const [profile, setProfile] = useState({
    city: "",
    budget: 0,
    lifestyle: "",
  });

  // ✅ Save profile to backend
  const saveProfile = async () => {
    try {
      await API.post("/profile/create", profile);

      alert("Profile Saved Successfully!");
    } catch (err) {
      alert("Error Saving Profile!");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">
          Create Profile
        </h2>

        <input
          placeholder="City"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) =>
            setProfile({ ...profile, city: e.target.value })
          }
        />

        <input
          placeholder="Budget"
          type="number"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) =>
            setProfile({ ...profile, budget: Number(e.target.value) })
          }
        />

        <input
          placeholder="Lifestyle (Quiet / Social)"
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) =>
            setProfile({ ...profile, lifestyle: e.target.value })
          }
        />

        <button
          onClick={saveProfile}
          className="w-full bg-pink-500 text-white py-2 rounded"
        >
          Save Profile
        </button>

        {/* ✅ Logout */}
        <button
          onClick={logout}
          className="w-full bg-gray-500 text-white py-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

