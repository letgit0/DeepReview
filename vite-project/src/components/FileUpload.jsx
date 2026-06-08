export default function FileUpload({ onUpload }) {
  function handleFileUpload(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      onUpload(e.target.result);
    };

    reader.readAsText(file);
  }

  return (
    <label className="flex items-center justify-center w-full h-40 border-2 border-dashed border-amber-300 rounded-xl bg-white cursor-pointer hover:border-amber-500 transition">
      <div className="text-center">
        <p className="text-slate-700 font-medium">
          Upload Code File
        </p>

        <p className="text-sm text-slate-500 mt-1">
          JS, JSX, TS, TSX
        </p>
      </div>

      <input
        type="file"
        className="hidden"
        accept=".js,.jsx,.ts,.tsx"
        onChange={handleFileUpload}
      />
    </label>
  );
}