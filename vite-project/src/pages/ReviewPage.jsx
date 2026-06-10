import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ReviewPage() {
  const { id } = useParams();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:3000/api/reviews/${id}`,
          { withCredentials: true }
        );

        setReview(res.data);
      } catch (err) {
        setError(
          err?.response?.data?.message ||
            "Failed to load review"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchReview();
  }, [id]);

  if (loading) return <p>Loading review...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

 return (
  <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
    <Navbar />

    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Code Review
        </h2>

        <p className="mt-2 text-gray-600">
          AI-generated analysis of your submitted code.
        </p>
      </div>

      {/* Code Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Source Code
        </h3>

        <pre className="bg-gray-900 text-green-300 p-5 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed">
          {review?.code}
        </pre>
      </div>

      {/* AI Feedback Section */}
      <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          AI Feedback
        </h3>

        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {review?.analysis}
        </div>
      </div>
    </div>
  </div>
);
}