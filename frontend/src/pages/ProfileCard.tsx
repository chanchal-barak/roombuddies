interface Props {
  profile: {
    city: string;
    budget: number;
    lifestyle: string;
  };
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] relative">

      <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
        92% Match
      </div>

      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>

      <h3 className="text-2xl font-bold text-center">
        You
      </h3>

      <div className="mt-6 space-y-3 text-center">

        <p className="bg-purple-50 py-2 rounded-lg">
          📍 {profile.city}
        </p>

        <p className="bg-purple-50 py-2 rounded-lg">
          💰 ₹{profile.budget}
        </p>

        <p className="bg-purple-50 py-2 rounded-lg">
          🌸 {profile.lifestyle}
        </p>

      </div>

      <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg">
        Edit Profile
      </button>
    </div>
  );
}
