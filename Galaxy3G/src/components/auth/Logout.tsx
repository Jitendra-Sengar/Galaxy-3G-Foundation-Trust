import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContextimport toast from "react-hot-toast";
import toast from "react-hot-toast";
// Define the shape of authentication context
interface AuthContextType {
  logout: () => void;
}

const Logout: React.FC = () => {
  const authContext = useContext(AuthContext);

  // Ensure context is not undefined (TypeScript safety)
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { logout } = authContext;

  const handleLogout = () => {
    logout(); // Call the logout function from context
    toast.success("Logged out successfully!");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
