import { useState } from "react";
import FileUpload from "./components/FileUpload";
import CodePreview from "./components/CodePreview";
import ReviewPanel from "./components/ReviewPanel";
import { reviewCode } from "./services/ai.service";

export default function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReview() {
    try {
      setLoading(true);

      const result = await reviewCode(code);
      setReview(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-amber-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">DeepReview</h1>

        <p className="text-slate-600 mb-8">
          Upload your code and receive thoughtful feedback.
        </p>

        <FileUpload onUpload={setCode} />

        <button
          onClick={handleReview}
          disabled={loading || !code}
          className={`
      mt-4 px-5 py-2 rounded-lg font-medium text-white transition flex items-center gap-2
    ${
      loading || !code
        ? "bg-amber-300 cursor-not-allowed"
        : "bg-amber-500 hover:bg-amber-600"
    }
  `}
        >
          {loading && (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}

          {loading ? "Reviewing..." : "Review Code"}
        </button>

        <CodePreview code={code} />

        <ReviewPanel review={review} />
      </div>
    </div>
  );
}
