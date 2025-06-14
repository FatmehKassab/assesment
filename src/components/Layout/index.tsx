import React from "react";
import { useLocation } from "react-router-dom";
import menuItemsData from "../Sidebar/menuItemsData";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../TopBar";

interface LayoutProps {
  content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ content }) => {
  const location = useLocation();

  const currentItem = menuItemsData.find(
    (item) => item.path === location.pathname
  );

  return (
    <section className="w-full h-screen flex">
      <div className="fixed w-48 h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col ml-48 w-[calc(100%-12rem)]">
        <div className="fixed top-0 left-48 w-[calc(100%-12rem)] z-10">
          <Topbar pageTitle={currentItem?.pageTitle || "Page"} />
        </div>

        <div className="flex-1 pt-24 p-5 overflow-auto">{content}</div>
      </div>
    </section>
  );
};

export default Layout;
