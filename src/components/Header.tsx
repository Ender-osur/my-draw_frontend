import { Link } from "react-router-dom";
import ThemeToggle from "./theme/ThemeToggle";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function Header() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <nav className={`${isDark ? "bg-gray-800" : "bg-white"} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className={`text-xl font-bold ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                Auth Demo
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/login"
              className={`${
                isDark
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              } px-3 py-2 rounded-md text-sm font-medium`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`${
                isDark
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
