export default function CodePreview({ code }) {
  if (!code) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-slate-800 mb-3">
        Uploaded Code
      </h2>

      <pre className="bg-white border border-amber-200 rounded-xl p-5 overflow-x-auto text-sm shadow-sm">
        {code}
      </pre>
    </div>
  );
}