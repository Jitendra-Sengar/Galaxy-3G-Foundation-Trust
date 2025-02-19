import React, { useState, useContext, FormEvent } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Define the shape of authentication context
interface AuthContextType {
  login: (token: string, isAdmin: boolean) => void;
}

// Define the shape of user credentials
interface Credentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  // Ensure context is not undefined (TypeScript safety)
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { login } = authContext;

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in with credentials:", credentials);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_USER_LOGIN}`, credentials);

      console.log(res.data.status);
      if (res.data) {
        login(res.data.token, res.data.isAdmin);
        toast.success("Login Successfully");

        // Reset Form Fields
        setCredentials({ email: "", password: "" });

        // Redirect to Blog Page
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err: any) {
      toast.error("Invalid credentials error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl text-center">
        <h2 className="text-3xl font-extrabold text-[#470A68] transition-colors duration-300 mb-4">Welcome Back!</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Login to continue your journey 🚀
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="p-3 w-full border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-300 text-sm md:text-base"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="p-3 w-full border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition-all duration-300 text-sm md:text-base"
            required
          />
          <button
            type="submit"
            className="bg-[#470A68] text-white rounded-md w-full py-3 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
