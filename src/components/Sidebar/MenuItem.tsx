import React from "react";
import { NavLink } from "react-router-dom";

type MenuItemProps = {
  pageTitle: string;
  path?: string;
  onClick?: () => void;
  isActive?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({
  pageTitle,
  path,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`w-full  py-2 hover:bg-primary/20 hover:rounded-md mt-2 ${
        isActive ? "border-r-2 border-primary bg-primary/15 rounded-md" : ""
      }`}
    >
      <NavLink to={path || ""} onClick={onClick}>
        <div className="flex items-center px-4 gap-2 ">
          <span>{pageTitle}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default MenuItem;
