import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";

const Topbar = ({ pageTitle }: any) => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="w-full h-[10%] min-h-[70px] flex items-center justify-between bg-primary rounded-2xl shadow px-4">
      <h1 className="text-white font-semibold text-xl">{pageTitle}</h1>
      <Button
        title="logout"
        width="fit"
        bgColor="white"
        textColor="primary"
        className="hidden sm:block"
        onClick={handleLogout}
      />
    </div>
  );
};

export default Topbar;
