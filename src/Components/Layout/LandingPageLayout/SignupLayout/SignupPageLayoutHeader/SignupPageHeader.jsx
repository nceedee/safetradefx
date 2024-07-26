import logo from "../../../../../Assets/Images/logo.png";
import backgroundVideo from "../../../../../Assets/Images/bg.png";
import { Link } from "react-router-dom";
import SignupHeaderInfo from "./SignupHeaderInfo";

const SignupPageHeader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden p-0 ">
      <div className="bg-black text-white flex items-center  justify-around w-full fixed top-0 left-0 z-50">
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
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo}
      />

      <div className="flex items-end justify-center translate-y-[-30px]  w-full h-full absolute top-0 left-0 z-10">
        <SignupHeaderInfo />
      </div>
    </div>
  );
};

export default SignupPageHeader;
