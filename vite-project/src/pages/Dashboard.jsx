import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import Navbar from "../components/Navbar.jsx";

export default function Dashboard() {
   const { user } = useAuth();

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">
      <Navbar />
       <div className="max-w-7xl mx-auto px-6 py-10">
       
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome, {user.name}
          </h2>

          <p className="mt-2 text-gray-600">
            Analyze code quality, track reviews, and improve your projects.
          </p>
        </div>

        {/* New Review CTA */}
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-yellow-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Ready for a new review?
              </h3>

              <p className="text-gray-600 mt-2">
                Submit your code and receive AI-powered feedback.
              </p>
            </div>

            <Link
              to="/review"
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-2xl shadow-md transition"
            >
              + New Review
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500 text-sm">
              Total Reviews
            </p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              0
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              No reviews yet
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500 text-sm">
              Average Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              —
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              Available after first review
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md">
            <p className="text-gray-500 text-sm">
              Best Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-gray-900">
              —
            </h3>

            <p className="mt-2 text-gray-400 text-sm">
              No review data
            </p>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Reviews
          </h3>

          <div className="border-2 border-dashed border-yellow-200 rounded-2xl p-12 text-center">
            <div className="text-5xl mb-4">📄</div>

            <h4 className="text-xl font-semibold text-gray-800">
              No reviews yet
            </h4>

            <p className="text-gray-500 mt-2">
              Your recent code reviews will appear here.
            </p>

            <Link
              to="/review"
              className="inline-block mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition"
            >
              Create First Review
            </Link>
          </div>
        </div>
      </div> 
    </div>
  );
}