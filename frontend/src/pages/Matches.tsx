import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Person = {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  matchType: "Great" | "Good" | "Low";
  tags: string[];
  interests: string[];
  image: string;
};

export default function Matches() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState<number[]>([]);

  const people: Person[] = [
    {
      id: 1,
      name: "Sarah",
      age: 24,
      location: "Brooklyn, NY",
      bio: "Marketing professional who loves cooking, yoga and peaceful evenings. Looking for a clean, positive and friendly roommate.",
      matchType: "Great",
      tags: ["Early Bird", "Pet Friendly"],
      interests: ["Cooking", "Yoga", "Reading", "Movies"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Alex",
      age: 26,
      location: "Manhattan, NY",
      bio: "Creative designer and night owl. Loves music, deep conversations and organized spaces.",
      matchType: "Good",
      tags: ["Night Owl", "Clean Freak"],
      interests: ["Music", "Photography", "Gym"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Ananya",
      age: 23,
      location: "Delhi, India",
      bio: "MBA student who enjoys reading and café hopping. Looking for a peaceful and social roommate.",
      matchType: "Great",
      tags: ["Social", "Clean"],
      interests: ["Books", "Travel", "Cooking"],
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      id: 4,
      name: "Kavya",
      age: 25,
      location: "Mumbai, India",
      bio: "Tech professional who works hybrid. Loves plants and movie nights.",
      matchType: "Good",
      tags: ["Plant Lover", "Organized"],
      interests: ["Movies", "Design", "Fitness"],
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Riya",
      age: 22,
      location: "Bangalore, India",
      bio: "College student and fitness enthusiast. Early riser and loves journaling.",
      matchType: "Great",
      tags: ["Early Bird", "Fitness"],
      interests: ["Yoga", "Gym", "Music"],
      image: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      id: 6,
      name: "Meera",
      age: 27,
      location: "Pune, India",
      bio: "HR professional who values cleanliness and calm vibes at home.",
      matchType: "Good",
      tags: ["Clean", "Calm"],
      interests: ["Reading", "Cooking", "Podcasts"],
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 7,
      name: "Tanya",
      age: 24,
      location: "Hyderabad, India",
      bio: "Fashion designer who loves creative spaces and late-night talks.",
      matchType: "Low",
      tags: ["Night Owl", "Creative"],
      interests: ["Art", "Fashion", "Music"],
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  const matchColor = (type: string) => {
    if (type === "Great")
      return "bg-green-100 text-green-600";
    if (type === "Good")
      return "bg-yellow-100 text-yellow-600";
    return "bg-red-100 text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-20 py-16">

      {/* Header */}
      <div className="flex justify-between items-center mb-14">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          AI Matches Ready
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition font-medium text-purple-600"
        >
          ← Back
        </button>
      </div>

      {/* Scrollable Matches */}
      <div className="space-y-10 max-h-[75vh] overflow-y-auto pr-4">

        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-3xl shadow-xl p-10 flex gap-10 items-start hover:shadow-2xl transition"
          >
            {/* Profile Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-36 h-36 rounded-2xl object-cover shadow-md"
            />

            {/* Info */}
            <div className="flex-1">

              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">
                  {person.name}, {person.age}
                </h2>

                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${matchColor(person.matchType)}`}>
                  {person.matchType} Match
                </span>
              </div>

              <p className="text-gray-500 mt-1">📍 {person.location}</p>

              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                {person.bio}
              </p>

              {/* Tags */}
              <div className="flex gap-3 mt-4 flex-wrap">
                {person.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-6">
                <h4 className="text-gray-600 font-semibold mb-3">Interests</h4>
                <div className="flex gap-3 flex-wrap">
                  {person.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-6 mt-8">
                <button
                  onClick={() =>
                    setLiked((prev) =>
                      prev.includes(person.id)
                        ? prev.filter((id) => id !== person.id)
                        : [...prev, person.id]
                    )
                  }
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-md transition ${
                    liked.includes(person.id)
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 hover:bg-pink-100"
                  }`}
                >
                  ❤️
                </button>

                <button className="w-14 h-14 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-xl shadow-md transition">
                  💬
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
