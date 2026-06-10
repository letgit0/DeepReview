import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../services/reviewService";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function NewReview() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const fileNameRef = useRef("pasted-code");

  const handleAnalyze = async () => {
    if (!code.trim() || code.trim().length < 10) {
      setError("Please provide valid source code");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await createReview({
        code,
        fileName: fileNameRef.current,
      });
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;
    fileNameRef.current = file.name;

    const reader = new FileReader();

    reader.onload = (e) => {
      setCode(e.target.result);
    };

    reader.readAsText(file);
  };

  const lineCount = code
    ? code.split("\n").filter((line) => line.trim() !== "").length
    : 0;

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
            Paste your code or upload a file and receive AI-powered feedback,
            suggestions, and improvement recommendations.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-yellow-100 p-8">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-semibold text-gray-700">
              Source Code
            </label>

            <div className="text-sm text-gray-500">
              {code.length} chars • {lineCount} lines
            </div>
          </div>

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
              bg-gray-50
              shadow-inner
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

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".js,.jsx,.ts,.tsx,.py,.java,.cpp,.c"
            onChange={handleFileUpload}
          />

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="
                px-6
                py-4
                bg-white
                border
                border-yellow-200
                hover:bg-yellow-50
                text-gray-700
                font-semibold
                rounded-2xl
                transition
              "
            >
              Upload File
            </button>

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

      <Footer />
    </div>
  );
}
