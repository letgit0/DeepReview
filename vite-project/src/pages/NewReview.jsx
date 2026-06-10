import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../services/reviewService"
import Navbar from "../components/Navbar"

export default function NewReview() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!code.trim() || code.trim().length < 10) {
      setError("Please provide valid source code");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await createReview(code);
      const reviewId = data.reviewId;

      if (!reviewId) {
        throw new Error("No reviewId returned from server");
      }

      navigate(`/review/${reviewId}`);
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message ||
          err.message ||
          "Failed to create review"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
    <Navbar />

    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          New Code Review
        </h2>

        <p className="mt-2 text-gray-600">
          Paste your code below and receive AI-powered feedback,
          suggestions, and improvements.
        </p>
      </div>

      {/* Review Form Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-8">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Source Code
        </label>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          rows={18}
          className="
            w-full
            rounded-2xl
            border
            border-yellow-200
            bg-yellow-50/40
            p-4
            font-mono
            text-sm
            text-gray-800
            focus:outline-none
            focus:ring-2
            focus:ring-yellow-400
            focus:border-yellow-400
            resize-none
          "
        />

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
            <p className="text-red-600 text-sm">
              {error}
            </p>
          </div>
        )}

        <div className="flex justify-end mt-6">
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="
              px-8
              py-4
              bg-yellow-400
              hover:bg-yellow-500
              disabled:bg-yellow-300
              disabled:cursor-not-allowed
              text-black
              font-bold
              rounded-2xl
              shadow-md
              transition
            "
          >
            {loading ? "Analyzing..." : "Analyze Code"}
          </button>
        </div>
      </div>

      {/* Tips Card */}
      <div className="mt-8 bg-white rounded-3xl shadow-md p-6 border border-yellow-100">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Tips for Better Reviews
        </h3>

        <ul className="space-y-2 text-gray-600">
          <li>• Include complete functions or components.</li>
          <li>• Provide enough context for meaningful feedback.</li>
          <li>• Paste code with proper formatting.</li>
          <li>• Larger snippets usually produce more useful reviews.</li>
        </ul>
      </div>
    </div>
  </div>
);
}
