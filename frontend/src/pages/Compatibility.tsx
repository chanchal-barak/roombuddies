import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Question {
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    question: "What’s the first thing you do after waking up?",
    options: ["Make my bed immediately", "Check my phone first", "Rush out of bed"],
  },
  {
    question: "What’s your ideal study/work vibe?",
    options: ["Pin-drop silence", "Soft background music", "Full volume music"],
  },
  {
    question: "How clean do you keep your space?",
    options: ["Extremely organized", "Mostly tidy", "Organized chaos"],
  },
  {
    question: "Sleep schedule?",
    options: ["Early bird", "Flexible sleeper", "Night owl"],
  },
  {
    question: "Guests at home?",
    options: ["Rarely", "Occasionally", "Very frequently"],
  },
  {
    question: "Cooking habits?",
    options: ["Daily home cook", "Sometimes cook", "Order food mostly"],
  },
  {
    question: "Noise tolerance?",
    options: ["Need quiet", "Moderate noise okay", "Loud environment fine"],
  },
  {
    question: "Weekend plans?",
    options: ["Relax at home", "Go out occasionally", "Always out & social"],
  },
  {
    question: "Sharing items?",
    options: ["Prefer personal space", "Okay with sharing basics", "Share everything"],
  },
  {
    question: "Conflict handling?",
    options: ["Talk immediately", "Think first then discuss", "Avoid confrontation"],
  },
];

export default function Compatibility() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  // ✅ Store answers per question
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  // ✅ Completion State
  const [completed, setCompleted] = useState(false);

  const progress = ((current + 1) / questions.length) * 100;

  const handleSelect = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const nextQuestion = () => {
    if (answers[current] === null) return;

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // ✅ Show completion card instead of alert
      setCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center px-6 py-16">

      {/* ================= COMPLETION CARD ================= */}
      {completed ? (
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl p-14 rounded-3xl shadow-2xl text-center animate-fadeUp">

          <div className="text-6xl mb-6">🎉</div>

          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
            Assessment Completed!
          </h2>

          <p className="text-gray-600 text-lg mb-10">
            Great job! Your compatibility preferences have been saved.
            <br />
            Now you can explore your perfect roommate matches.
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Go Back Home →
          </button>
        </div>
      ) : (
        /* ================= QUESTION CARD ================= */
        <div className="relative w-full max-w-3xl bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-2xl">

          {/* 🔙 Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 right-6 px-4 py-2 text-sm bg-white shadow rounded-lg hover:bg-gray-100 transition"
          >
            ← Back
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
              Lifestyle
            </div>

            <h2 className="text-3xl font-bold mb-2">
              Compatibility Assessment
            </h2>

            <p className="text-gray-500">
              Question {current + 1} of {questions.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
            <div
              className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <h3 className="text-xl font-semibold mb-6">
            {questions[current].question}
          </h3>

          {/* Options */}
          <div className="space-y-4">
            {questions[current].options.map((opt, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-xl border cursor-pointer transition ${
                  answers[current] === index
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300"
                }`}
              >
                <input
                  type="radio"
                  checked={answers[current] === index}
                  onChange={() => handleSelect(index)}
                  className="mr-4 accent-purple-600"
                />
                {opt}
              </label>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prevQuestion}
              disabled={current === 0}
              className="px-6 py-3 rounded-xl bg-gray-200 text-gray-600 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={nextQuestion}
              className="px-8 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition shadow-lg"
            >
              {current === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
