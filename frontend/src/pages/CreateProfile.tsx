import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";

export default function CreateProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    city: "",
    budget: 0,
    lifestyle: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const saveProfile = async () => {
    setError("");
    setSuccess("");

    try {
      await API.post("/profile/create", profile);
      setSuccess("Profile Created Successfully!");

      setTimeout(() => {
        navigate("/my-profile");
      }, 1500);

    } catch (err) {
      setError("Error Saving Profile");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white flex flex-col">

      <div className="flex flex-1 justify-center items-center">

        <div className="bg-white p-10 rounded-2xl shadow-xl w-[500px]">

          <h2 className="text-3xl font-bold text-center mb-6">
            Create Your Profile
          </h2>

          {success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <input
            placeholder="City"
            className="w-full p-3 border rounded-lg mb-4 focus:border-purple-500 outline-none"
            onChange={(e) =>
              setProfile({ ...profile, city: e.target.value })
            }
          />

          <input
            placeholder="Budget"
            type="number"
            className="w-full p-3 border rounded-lg mb-4 focus:border-purple-500 outline-none"
            onChange={(e) =>
              setProfile({ ...profile, budget: Number(e.target.value) })
            }
          />

          <select
            className="w-full p-3 border rounded-lg mb-6 focus:border-purple-500 outline-none"
            onChange={(e) =>
              setProfile({ ...profile, lifestyle: e.target.value })
            }
          >
            <option value="">Select Lifestyle</option>
            <option>Quiet</option>
            <option>Balanced</option>
            <option>Social</option>
          </select>

          <button
            onClick={saveProfile}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:scale-105 transition"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
