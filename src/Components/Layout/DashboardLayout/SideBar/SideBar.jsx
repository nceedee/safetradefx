import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // Import FaBars for the toggle button
import { menuLink } from "./menuLink"; // Import your menuLink array
import { Link, useLocation } from "react-router-dom"; // Using useLocation to detect route changes

export const SideBar = ({ children }) => {
  const [isTextVisible, setIsTextVisible] = useState(false); // State to toggle text visibility
  const location = useLocation(); // Detects current route

  // Reset text visibility when the route changes
  useEffect(() => {
    setIsTextVisible(false); // Hide text by default when the route changes
  }, [location]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-primary1 w-16 lg:w-64 border-r-2 border-gray-700 border-[1px] flex flex-col">
        {/* Toggle Bar with FaBars icon */}
        
        {menuLink.map((menu, index) => {
          // Check if the current route matches the menu link's path
          const isActive = location.pathname === menu.path;
          
          return (
            <Link
              key={index}
              to={menu.path}
              className={`flex items-center text-white px-4 py-4 hover:bg-opacity-75 hover:bg-gray-700 transition-opacity ${
                isActive ? "bg-gray-700" : ""
              }`} // Highlight the background if active
            >
              <div
                className={`text-2xl mr-3 ${
                  isActive ? "text-orange-500" : ""
                }`} // Apply orange color to icon if active
              >
                {menu.icon}
              </div>
              {/* On larger screens, show text by default; on smaller screens, show based on toggle */}
              <span
                className={`text-base ${isTextVisible ? "block" : "hidden"} md:block`}
              >
                {menu.text}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Main content area where children components will render */}
      <div className="flex-grow lg:p-6 p-0 w-[80%] overflow-y-auto h-screen">
        {children}
      </div>
    </div>
  );
};
