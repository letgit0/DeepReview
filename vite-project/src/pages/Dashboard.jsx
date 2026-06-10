import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import { getAllReviews } from "../services/reviewService.js";
import { useReviews } from "../hooks/useReviews.js";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { getReviewStats } from "../utils/score.js";
import Footer from "../components/Footer.jsx";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: reviews = [] } = useReviews();
  const { average, max } = getReviewStats(reviews);

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome, {user?.name || "Developer"}
          </h2>

          <p className="mt-2 text-gray-600">
            Analyze code quality, track reviews, and improve your projects.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-yellow-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Ready for a new review?
              </h3>

              <p className="text-gray-600 mt-2">
                Submit your code and receive AI-powered feedback.
              </p>
            </div>

            <Link
              to="/review/new"
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-2xl shadow-md transition"
            >
              + New Review
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Total */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-yellow-100">
            <p className="text-gray-500 text-sm">Total Reviews</p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              {reviews?.length || 0}
            </h3>

            <p className="mt-2 text-gray-400 text-sm">Reviews till now</p>
          </div>

          {/* Average */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-yellow-100">
            <p className="text-gray-500 text-sm">Average Score</p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              {average ?? "—"}
            </h3>

            <p className="mt-2 text-gray-400 text-sm">Across all reviews</p>
          </div>

          {/* Best */}
          <div className="bg-white rounded-3xl p-6 shadow-md border border-yellow-100">
            <p className="text-gray-500 text-sm">Best Score</p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              {max ?? "—"}
            </h3>

            <p className="mt-2 text-gray-400 text-sm">Highest review score</p>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-yellow-100">
          {/* Header row */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recent Reviews</h3>

            {reviews?.length > 0 && (
              <button
                onClick={() => navigate("/history")}
                className="
          px-5 py-2
          bg-white
          border
          border-yellow-200
          text-gray-700
          font-semibold
          rounded-2xl
          hover:bg-yellow-50
          transition
          shadow-sm
        "
              >
                View All →
              </button>
            )}
          </div>

          {reviews.length === 0 ? (
            <div className="border-2 border-dashed border-yellow-200 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">📄</div>

              <h4 className="text-xl font-semibold text-gray-800">
                No reviews yet
              </h4>

              <p className="text-gray-500 mt-2">
                Your recent code reviews will appear here.
              </p>

              <Link
                to="/review/new"
                className="inline-block mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition"
              >
                Create First Review
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.slice(0, 3).map((review) => (
                <div
                  key={review._id}
                  onClick={() => navigate(`/review/${review._id}`)}
                  className="flex items-center justify-between bg-yellow-50 hover:bg-yellow-100 border border-yellow-100 rounded-2xl px-5 py-4 cursor-pointer transition "
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 pb-1">
                      {review.fileName || "Untitled Review"}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div
                    className={`
          px-4 py-1 rounded-full text-sm font-semibold
          ${
            review.analysis?.score >= 75
              ? "bg-green-100 text-green-700"
              : review.analysis?.score >= 50
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-600"
          }
        `}
                  >
                    {review.analysis?.score ?? "—"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
