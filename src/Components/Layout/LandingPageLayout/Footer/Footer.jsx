import React from "react";
import logo from "../../../../Assets/Images/logo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <div className="pt-20 flex flex-col space-y-6 items-center lg:space-y-0 lg:flex-row justify-evenly lg:items-start pb-10">
      <div className="w-[80%] lg:w-[20%]">
        <img src={logo} alt="" className="w-48 lg:w-32 m-auto" />
        <p>
          We The Safe Trade Fx Team Generates Superior and sustainable
          performance for our Stakeholders, Investors and Business partner’s.
        </p>
      </div>
      <div className="w-[80%] lg:w-[20%] flex flex-col  space-y-6">
        <h1 className="font-bold text-2xl">Get Started</h1>
        <h3>Sign Up</h3>
        <h3>Login</h3>
      </div>

      <div className="w-[80%] lg:w-[20%] flex flex-col  space-y-6">
        <h1 className="font-bold text-2xl">Contact Info</h1>
        <div>
          <div className="flex items-center space-x-3">
            <AddIcCallIcon
              className="text-white bg-blue-700 p-2 rounded-md"
              sx={{ fontSize: 40 }}
            />
            <div>
              <p>Telephone</p>
              <p>+44 7404 592348</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <EmailIcon
              className="text-white bg-blue-700 p-2 rounded-md"
              sx={{ fontSize: 40 }}
            />
            <div>
              <p>Send Us Email</p>
              <a href="mailto:safetrustf@gmail.com"> info@safetradefx.com</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <LocationOnIcon
              className="text-white bg-blue-700 p-2 rounded-md"
              sx={{ fontSize: 40 }}
            />
            <div>
              <p>Address</p>
              <p>UK, London.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
