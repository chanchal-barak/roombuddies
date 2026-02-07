import { useEffect, useState } from "react";
import { API } from "../api/api";
import ProfileCard from "./ProfileCard";

export default function MyProfile() {

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get("/profile/me")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Unable to load profile.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 🔄 Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="text-xl font-semibold text-purple-600 animate-pulse">
          Loading your profile...
        </div>
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="text-red-500 text-lg mb-4">{error}</div>
        <div className="text-gray-600">
          Make sure backend is running and you're logged in.
        </div>
      </div>
    );
  }

  // 🧍 No Profile Found
  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white via-purple-50 to-white">
        <div className="text-gray-600 text-lg">
          No profile found. Please create your profile.
        </div>
      </div>
    );
  }

  // ✅ Normal UI
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white flex justify-center items-center">
      <ProfileCard profile={profile} />
    </div>
  );
}
