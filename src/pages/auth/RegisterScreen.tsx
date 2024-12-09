import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPlus } from "lucide-react";
import { setUser, setError } from "../../store/slices/authSlice";
import toast from "react-hot-toast";
import { RootState } from "../../store/store";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate registration - In a real app, this would be an API call
      if (email && password && name) {
        dispatch(setUser({ email, name }));
        toast.success("Registration successful!");
      }
    } catch (error) {
      console.error("Registration failed. Error: ", error);
      dispatch(setError("Registration failed"));
      toast.error("Registration failed");
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
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDark
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                } rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                  isDark
                    ? "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
                    : "border-gray-300 text-gray-900 placeholder-gray-500"
                } focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
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
              <UserPlus className="h-5 w-5 mr-2" />
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
