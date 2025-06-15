import React from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
