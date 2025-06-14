import { useLocation, Outlet } from "react-router-dom";
import menuItemsData from "./menuItemsData";
import MenuItem from "./MenuItem";
import { IMAGES } from "../../utils/images";

const Sidebar = () => {
  const currentLocation = useLocation();

  return (
    <div className="w-full h-full bg-white text-primary  shadow">
      <div className="w-full h-[10%] max-h-[70px] flex items-start justify-center p-5">
        <img
          src={IMAGES.logo}
          alt="Logo"
          width={200}
          height={50}
          className="min-w-[150px] object-cover"
        />
      </div>
      <div className="w-full h-[90%]">
        {menuItemsData.map((menuItem, index) => (
          <MenuItem
            key={index}
            pageTitle={menuItem.pageTitle}
            path={menuItem.path}
            isActive={currentLocation.pathname === menuItem.path}
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
