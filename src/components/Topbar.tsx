import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faChevronDown,
//   faSearch,
//   faUser,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-full h-[10%] min-h-[70px] flexCenter bg-primary shadow-lg">
      <div className="w-1/2 h-full flex items-center pl-10">
        <div className="w-3/4 flex items-center gap-4 py-2 px-4 bg-secondary rounded-full text-primary">
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-primary placeholder:text-primary"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flexEnd gap-8 divide-x">
        <div className="top-bar-icon">
          {/* <FontAwesomeIcon icon={faBell} /> */}
        </div>
        <div className="flexCenter px-8 gap-8 relative">
          <div className="top-bar-icon">
            {/* <FontAwesomeIcon icon={faUser} /> */}
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-white">Admin name</span>
            <span className="text-sm text-third">Admin role</span>
          </div>
          <div
            className="w-10 h-10 flexCenter text-secondary cursor-pointer"
            onClick={toggleDropdown}
          >
            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute top-12 right-10 mt-2 w-fit bg-white rounded-lg shadow-lg">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {/* <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> */}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
