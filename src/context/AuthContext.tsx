import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode, FC } from "react";

interface UserPayload {
  username: string;
  role: string;
  exp?: number;
}

interface AuthContextType {
  token: string | null;
  user: UserPayload | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserPayload | null>(null);

  const login = (username: string, password: string): boolean => {
    if (
      username === import.meta.env.VITE_AUTH_USERNAME &&
      password === import.meta.env.VITE_AUTH_PASSWORD
    ) {
      const payload: UserPayload = {
        username,
        role: "admin",
        exp: Math.floor(Date.now() / 1000) + 50, // expires in 50 seconds
      };
      const token = btoa(JSON.stringify(payload));
      setToken(token);
      setUser(payload);
      return true;
    }
    return false;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const isLoggedIn =
    !!user && (!user.exp || user.exp > Math.floor(Date.now() / 1000));

  useEffect(() => {
    console.log("Auth Token:", token);
  }, [token]);

  useEffect(() => {
    if (!user || !user.exp) return;

    const now = Math.floor(Date.now() / 1000);
    const delay = (user.exp - now) * 1000;

    if (delay <= 0) {
      alert("Your session has expired. Please log in again.");
      logout();
      return;
    }

    const timeout = setTimeout(() => {
      alert("Your session has expired. Please log in again.");
      logout();
    }, delay);

    return () => clearTimeout(timeout);
  }, [user]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
