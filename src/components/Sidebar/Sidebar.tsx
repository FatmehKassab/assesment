import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import menuItemsData from "./menuItemsData";
import MenuItem from "./MenuItem";
import { IMAGES } from "../../utils/images";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const currentLocation = useLocation();

  const handleExpand = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="w-full h-full bg-primary text-white rounded-r-3xl">
      <div className="w-full h-[10%] max-h-[70px] flex items-start justify-center p-5">
        <img
          src={IMAGES.white_logo}
          alt="Logo"
          width={200}
          height={50}
          className="min-w-[150px] object-cover"
        />
      </div>
      <div className="w-full h-[90%] p-2">
        {menuItemsData.map((menuItem, index) => (
          <MenuItem
            key={index}
            // icon={menuItem.icon}
            title={menuItem.title}
            path={menuItem.path}
            isExpanded={expandedMenu === menuItem.title}
            onClick={() => handleExpand(menuItem.title)}
            subMenu={menuItem.subMenu}
            isActive={currentLocation.pathname === menuItem.path}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
