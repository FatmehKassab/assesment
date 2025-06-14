// src/Dashboard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar";

const Dashboard: React.FC = () => {
  const { user, logout, isLoggedIn } = useAuth();
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
    <section className="w-full h-screen flex">
      <div className="fixed w-[14%] h-full">
        <Sidebar />
      </div>

      <div className="w-[83%] flex flex-col ml-[17%]">
        {/* <div className="fixed top-0 left-[17%] w-[83%] z-10">
          <Topbar />
        </div> */}

        <div className="flex-1 pt-24 p-5 overflow-auto">
          <h2>Dashboard</h2>
          {user ? (
            <>
              <p>Welcome, {user.username}!</p>
              <p>Role: {user.role}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
