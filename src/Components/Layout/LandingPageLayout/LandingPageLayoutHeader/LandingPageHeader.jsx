import { useEffect, useState } from "react";
import logo from "../../../../Assets/Images/logo.png";
import backgroundVideo from "../../../../Assets/Images/header2.jpg";

import { Link } from "react-router-dom";

const LandingPageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[90vh] p-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundVideo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`fixed top-0 left-0 w-full flex z-50 items-center lg:justify-around justify-between p-4 transition-colors duration-300 ${
          isScrolled ? "bg-white opacity-[.9]" : "bg-transparent"
        }`}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
          </Link>
        </div>

        <Link to="/signup">
          <button className="bg-green-700 text-white py-2 px-4 rounded-sm">
            Open account
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default LandingPageHeader;
