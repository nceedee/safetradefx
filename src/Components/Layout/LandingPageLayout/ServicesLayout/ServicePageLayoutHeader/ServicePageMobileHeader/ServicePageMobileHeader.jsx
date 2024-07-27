import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../../Assets/Images/logo.png";
import { Menu, X } from "react-feather"; // Assuming react-feather for icons
import ServiceHeaderInfo from "../ServiceHeaderInfo";
import backgroundVideo from "../../../../../../Assets/Images/servicesbg.jpeg";

export const ServicePageMobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadGoogleTranslate = () => {
      if (!document.querySelector("#google-translate-script")) {
        const googleTranslateScript = document.createElement("script");
        googleTranslateScript.id = "google-translate-script";
        googleTranslateScript.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(googleTranslateScript);
      }

      window.googleTranslateElementInit = () => {
        if (!document.querySelector(".goog-te-combo")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,it,ja,zh-CN,ar,pt,ru,ko,hi",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };
    };

    loadGoogleTranslate();
  }, []);

  useEffect(() => {
    const applyStoredLanguage = () => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
        const intervalId = setInterval(() => {
          const selectElem = document.querySelector(".goog-te-combo");
          if (selectElem) {
            selectElem.value = storedLanguage;
            selectElem.dispatchEvent(new Event("change"));
            clearInterval(intervalId);
          }
        }, 1000);
      }
    };

    applyStoredLanguage();

    const intervalId = setInterval(() => {
      const selectElem = document.querySelector(".goog-te-combo");
      if (selectElem) {
        selectElem.addEventListener("change", () => {
          localStorage.setItem("selectedLanguage", selectElem.value);
        });
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.className =
          "goog-te-combo bg-white border border-gray-300 rounded-md px-4 py-2 text-base text-gray-700 outline-none cursor-pointer transition-all duration-300 ease-in-out";
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden p-0">
      <div className="bg-black text-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-8">
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
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
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
            <li
              id="google_translate_element"
              className="relative h-10 p-0 flex top-10 items-center"
            ></li>
          </ul>
        </div>
      )}

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
      />
      <div className="flex items-end justify-center translate-y-[-30px] w-full h-full absolute top-0 left-0 z-10">
        <ServiceHeaderInfo />
      </div>
    </div>
  );
};
