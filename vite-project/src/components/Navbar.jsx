import { useAuth } from "../context/authContext.jsx";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-900">
          <span className="text-yellow-500">Deep</span>Review
        </h1>

        <button
          onClick={logout}
          className="
            px-4 py-2
            rounded-xl
            bg-red-50
            text-red-600
            hover:bg-red-100
            font-medium
            transition
          "
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
