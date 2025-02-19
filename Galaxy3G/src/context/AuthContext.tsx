import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define types for authentication state
interface AuthState {
  token: string | null;
  isAdmin: boolean;
}

// Define the shape of the context value
interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
  login: (token: string, isAdmin: boolean) => void;
  logout: () => void;
}

// Create Context with default values
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Create AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    token: localStorage.getItem("token") || null,
    isAdmin: localStorage.getItem("isAdmin") === "true",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedIsAdmin = localStorage.getItem("isAdmin") === "true";

    if (storedToken) {
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: storedToken,
        isAdmin: storedIsAdmin,
      }));
    }
  }, []);

  const login = (token: string, isAdmin: boolean) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin ? "true" : "false");

    setAuth({ token, isAdmin });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setAuth({ token: null, isAdmin: false });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
