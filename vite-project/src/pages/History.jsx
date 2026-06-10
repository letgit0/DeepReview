import { useNavigate } from "react-router-dom";
import { useReviews } from "../hooks/useReviews";
import Navbar from "../components/Navbar";

export default function History() {
  const navigate = useNavigate();
  const { data: reviews = [], isLoading, error } = useReviews();

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
        <p className="text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
        <p className="text-red-500">Failed to load reviews.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Review History
          </h2>

          <p className="mt-2 text-gray-600">
            All your previous AI code reviews in one place.
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 overflow-hidden">
          <table className="w-full">
            {/* Header */}
            <thead className="bg-yellow-50 border-b border-yellow-100">
              <tr className="text-left text-gray-600 text-sm">
                <th className="py-4 px-6">Date</th>
                <th className="py-4 px-6">File</th>
                <th className="py-4 px-6">Score</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review._id}
                  onClick={() => navigate(`/review/${review._id}`)}
                  className="
                    border-b border-yellow-50
                    hover:bg-yellow-50
                    cursor-pointer
                    transition
                  "
                >
                  <td className="py-4 px-6 text-gray-600">
                    <span className="bg-yellow-50 px-3 py-1 rounded-full text-sm border border-yellow-100">
                      {formatDate(review.createdAt)}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {review.fileName || "Untitled Code"}
                  </td>

                  <td className="py-4 px-6">
                    <span
                      className={`
                        px-3 py-1 rounded-full text-sm font-semibold
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
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty state */}
          {reviews.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              No reviews found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}