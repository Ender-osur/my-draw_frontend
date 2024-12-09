import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { LogIn, Github } from "lucide-react";
import toast from "react-hot-toast";

import { setUser, setError } from "../../store/slices/authSlice";
import { RootState } from "../../store/store";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        dispatch(setUser({ email }));
        toast.success("Login successful!");
      }
    } catch (error) {
      console.error("Login failed. Error: ", error);
      dispatch(setError("Invalid credentials"));
      toast.error("Login failed");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2
            className={`mt-6 text-center text-3xl font-extrabold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDark
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDark
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                } rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isDark
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              <LogIn className="h-5 w-5 mr-2" />
              Sign in
            </button>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => loginWithRedirect()}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-800 hover:bg-gray-900"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
            >
              <Github className="h-5 w-5 mr-2" />
              Continue with GitHub
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
