import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../../Assets/Images/logo.png";
import { Menu, X } from "react-feather"; // Assuming react-feather for icons
import SupportHeaderInfo from "../SupportHeaderInfo";
import backgroundVideo from '../../../../../../Assets/Videos/support.mp4'

export const SupportPageMobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden p-0">
      <div className="bg-black text-white flex items-center justify-between w-full fixed top-0 left-0 z-50 w-full px-8">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </Link>
        </div>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </div>

      {menuOpen && (
        <div className="bg-black text-white w-full h-full fixed top-20 left-0 z-50 flex flex-col items-center space-y-4 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li className="relative">
              <Link to="/about-us" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="relative">
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li className="relative">
              <Link to="/plans" onClick={toggleMenu}>
                Plans
              </Link>
            </li>
            <li className="relative">
              <Link to="/support" onClick={toggleMenu}>
                Support
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={toggleMenu}>
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      />
      <div className="flex items-end justify-center translate-y-[-30px] w-full h-full absolute top-0 left-0 z-10">
        <SupportHeaderInfo />
      </div>
    </div>
  );
};
