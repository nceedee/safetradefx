import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import FaBars for the toggle button
import { menuLink } from "./menuLink"; // Import your menuLink array
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

export const SideBar = ({ children }) => {
  const [isTextVisible, setIsTextVisible] = useState(false); // State to toggle text visibility

  // Function to toggle the visibility of text
  const toggleTextVisibility = () => {
    setIsTextVisible((prev) => !prev);
  };

  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      <div className="bg-primary1 w-64 border-r-2 border-gray-700 border-[1px] flex flex-col">
        {/* Toggle Bar with FaBars icon */}
        <div
          className="flex items-center justify-center h-12 bg-gray-800 cursor-pointer"
          onClick={toggleTextVisibility}
        >
          <FaBars className="text-white text-2xl" />
        </div>

        {menuLink.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className="flex items-center text-white px-4 py-4 hover:bg-opacity-75 hover:bg-gray-700 transition-opacity"
          >
            <div className="text-2xl mr-3">{menu.icon}</div>
            {isTextVisible && <span className="text-base">{menu.text}</span>}
          </Link>
        ))}
      </div>

      {/* Main content area where children components will render */}
      <div className="flex-grow md:p-6 p-0 w-[80%]">{children}</div>
    </div>
  );
};
