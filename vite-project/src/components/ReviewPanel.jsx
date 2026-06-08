import ReactMarkdown from "react-markdown";

export default function ReviewPanel({ review }) {
  if (!review) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-800 mb-3">
        Review Results
      </h2>

      <div className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm prose prose-slate max-w-none ">
        <ReactMarkdown>
          {review}
        </ReactMarkdown>
      </div>
    </div>
  );
}