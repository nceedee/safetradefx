import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Import FaBars for the toggle button
import { menuLink } from "./menuLink"; // Import your menuLink array
import { Link, useLocation } from "react-router-dom"; // Using useLocation to detect route changes

export const SideBar = ({ children }) => {
  const [isTextVisible, setIsTextVisible] = useState(false); // State to toggle text visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility in mobile view
  const location = useLocation(); // Detects current route

  // Reset text visibility when the route changes
  useEffect(() => {
    setIsTextVisible(false); // Hide text by default when the route changes
    setIsSidebarOpen(false); // Close the sidebar when navigating to a different route
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`bg-primary1 border-r-2 border-gray-700 border-[1px] flex flex-col transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-16"} lg:w-64`}>
        {/* Toggle Button */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-primary1 text-white">
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        {/* Sidebar Menu Links */}
        <div className={`flex-grow ${isSidebarOpen ? "block" : "hidden"} lg:block`}>
          {menuLink.map((menu, index) => {
            const isActive = location.pathname === menu.path; // Check if the current route matches the menu link's path

            return (
              <Link
                key={index}
                to={menu.path}
                className={`flex items-center text-white px-4 py-4 hover:bg-opacity-75 hover:bg-gray-700 transition-opacity ${
                  isActive ? "bg-gray-700" : ""
                }`} // Highlight the background if active
              >
                <div
                  className={`text-2xl mr-3 ${isActive ? "text-orange-500" : ""}`}
                >
                  {menu.icon}
                </div>
                {/* On larger screens, show text by default; on smaller screens, show text if sidebar is open */}
                <span
                  className={`text-base ${isSidebarOpen ? "block" : "hidden"} lg:block`}
                >
                  {menu.text}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main content area where children components will render */}
      <div className="flex-grow lg:p-6 p-0 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
