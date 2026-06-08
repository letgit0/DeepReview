import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-200">

      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">
          DeepReview
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 font-medium text-gray-700 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium mb-6">
            AI-Powered Code Analysis
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Review Code
            <span className="block text-yellow-500">
              Smarter & Faster
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            DeepReview helps developers analyze code quality, detect bugs,
            improve performance, and maintain cleaner code with AI-powered
            insights.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-2xl shadow-lg transition duration-300"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-semibold rounded-2xl shadow transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-900">
              AI Reviews
            </h3>
            <p className="mt-2 text-gray-600">
              Get detailed feedback on code quality, structure, and best
              practices.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900">
              Performance Insights
            </h3>
            <p className="mt-2 text-gray-600">
              Discover bottlenecks and optimize your code for speed and
              efficiency.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gray-900">
              Security Analysis
            </h3>
            <p className="mt-2 text-gray-600">
              Detect vulnerabilities and follow secure coding standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}