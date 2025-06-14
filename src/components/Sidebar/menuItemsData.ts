// src/components/Sidebar/menuItems.ts
// import {
//     faTachometerAlt,
//     faUser,
//     faCalendarAlt,
//     faFileAlt,
//     faClipboardList,
//   } from "@fortawesome/free-solid-svg-icons";
  
  const menuItemsData = [
    {
      // icon: faTachometerAlt,
      title: "Dashboard",
      path: "/",
      subMenu: [
        { title: "Recent Activity", path: "/recent-activity" },
        { title: "Notifications and Alerts", path: "/notifications-alerts" },
      ],
    },
   
  ];
  
  export default menuItemsData;
  