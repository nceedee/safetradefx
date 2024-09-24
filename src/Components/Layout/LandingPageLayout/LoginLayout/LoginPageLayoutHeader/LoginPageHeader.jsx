import logo from "../../../../../Assets/Images/logo.png";
import backgroundVideo from "../../../../../Assets/Images/bg.png";
import { Link } from "react-router-dom";
import LoginHeaderInfo from "./LoginHeaderInfo";
import { useEffect } from "react";

const LoginPageHeader = () => {
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
							includedLanguages:
								"en,es,fr,de,it,ja,zh-CN,ar,pt,ru,ko,hi,fa,tr,id,vi",
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

 return (
   <div className="relative w-full h-screen overflow-hidden p-0">
     <div className="bg-black text-white flex items-center justify-around w-full fixed top-0 left-0 z-50 p-4">
       <div className="w-[30%] p-0">
         <ul className="flex justify-between p-0">
           <li className="relative">
             <Link to="/about-us">About US</Link>
           </li>
           <li className="relative">
             <Link to="/services">Services</Link>
           </li>
           <li className="relative">
             <Link to="/plans">Plans</Link>
           </li>
         </ul>
       </div>

       <div>
         <Link to="/">
           <img src={logo} alt="Logo" className="w-32 h-32" />
         </Link>
       </div>

       <div className="w-[30%] p-0">
         <ul className="flex justify-between p-0">
           <li className="relative">
             <Link to="/support">Support</Link>
           </li>
           <li className="relative">
             <Link to="/signup">Signup</Link>
           </li>
           <li className="relative">
             <Link to="/login">Login</Link>
           </li>
           <li
             id="google_translate_element"
             className="relative h-10 p-0 flex items-center"
           ></li>
         </ul>
       </div>
     </div>

     <img
       className="absolute top-0 left-0 w-full h-full object-cover"
       src={backgroundVideo}
     />

     <div className="flex items-end justify-center translate-y-[-30px] w-full h-full absolute top-0 left-0 z-10">
       <LoginHeaderInfo />
     </div>
   </div>
 );
};

export default LoginPageHeader;
