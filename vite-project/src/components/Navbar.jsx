import { useAuth } from "../context/authContext.jsx";

export default function Navbar(){
    const { logout } = useAuth();

    return(
        <nav className="bg-white/80 backdrop-blur-md border-b border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            DeepReview
          </h1>

          <button
            onClick={logout}
            className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    )
}