import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../services/reviewService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReviewPage() {
  const { id } = useParams();

  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);

        const data = await getReview (id);
        
        setReview(data);
      } catch (err) {
        setError(
          err?.data?.message ||
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
    </div>

    {/* Score Cards */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
      {[
        { label: "Score", value: review?.analysis?.score },
        { label: "Readability", value: review?.analysis?.readability },
        { label: "Maintainability", value: review?.analysis?.maintainability },
        { label: "Security", value: review?.analysis?.security },
        { label: "Performance", value: review?.analysis?.performance },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md border border-yellow-100 p-4 text-center"
        >
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {item.value ?? "—"}
          </p>
        </div>
      ))}
    </div>

      {/* Code Section */}
    <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Source Code
      </h3>

      <pre className="bg-gray-900 text-green-300 p-5 rounded-2xl overflow-x-auto text-sm font-mono">
        {review?.code}
      </pre>
    </div>

    {/* Strengths */}
    <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6 mb-6">
      <h3 className="text-lg font-bold text-green-600 mb-4">
        Strengths
      </h3>

      <ul className="space-y-2">
        {review?.analysis?.strengths?.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-gray-700">
            <span className="text-green-500">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Weaknesses */}
    <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6 mb-6">
      <h3 className="text-lg font-bold text-red-600 mb-4">
        Weaknesses
      </h3>

      <ul className="space-y-2">
        {review?.analysis?.weaknesses?.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-gray-700">
            <span className="text-red-500">⚠</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Suggestions */}
    <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-6">
      <h3 className="text-lg font-bold text-blue-600 mb-4">
        Suggestions
      </h3>

      <ul className="space-y-2">
        {review?.analysis?.suggestions?.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-gray-700">
            <span className="text-blue-500">💡</span>
            {item}
          </li>
        ))}
      </ul>
    </div>

  </div>

  <Footer />
</div>
);
}