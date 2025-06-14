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
    <NavLink to={path || ""} onClick={onClick}>
      <div
        className={`w-full px-4 py-2 hover:bg-primary/20 hover:rounded-md mt-2 ${
          isActive ? "border-r-2 border-primary bg-primary/15 rounded-md" : ""
        }`}
      >
        <span>{pageTitle}</span>
      </div>
    </NavLink>
  );
};

export default MenuItem;
