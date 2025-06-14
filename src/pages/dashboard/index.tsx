import React from "react";
import { useAuth } from "../../context/AuthContext";
import Layout from "../../components/Layout";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <Layout
      content={
        <div className=" text-text sm:text-4xl font-extrabold font-serif capitalize  space-y-4">
          {user ? (
            <>
              <p>Welcome, {user.username}!</p>
              <p>Role: {user.role}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      }
    />
  );
};

export default Dashboard;
