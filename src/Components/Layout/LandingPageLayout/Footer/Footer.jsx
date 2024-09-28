import React from "react";
import logo from "../../../../Assets/Images/logo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import award from "../../../../Assets/Images/broker.png";
import certificate from '../../../../Assets/Images/safetradefx_document.jpg' 

const Footer = () => {
  return (
    <div className="pt-20  bg-blue-100 ">
      <div className="w-[95%] lg:w-[90%] m-auto">
        <div className="flex flex-col lg:flex-row space-y-6 items-center lg:space-y-0  justify-evenly lg:items-start pb-10">
          <div className="w-[80%] lg:w-[20%]">
            <img src={logo} alt="" className="w-48 lg:w-32 m-auto" />
            <p>
              We The Safe Trade Fx Team Generates Superior and sustainable
              performance for our Stakeholders, Investors and Business
              partner’s.
            </p>
          </div>
          <div className="w-[80%] lg:w-[20%] flex flex-col  space-y-6">
            <h1 className="font-bold text-2xl">Get Started</h1>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
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
                  <a href="mailto:safetrustf@gmail.com">
                    {" "}
                    info@safetradefx.com
                  </a>
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
        
        <div className="m-auto flex justify-center w-40 border-[4px] animate-pulse border-green-500 bg-blue-500 text-white font-bold p-4 rounded-sm">
          <a href={certificate} target="_blank" rel="noopener noreferrer"><h4>SafeTradeFx Certificate</h4></a>
        </div>
          <div className="p-6 mt-10 text-center flex flex-col items-center">
            <p className="text-gray-500">
              © 2024 Safe Trade FX - ALL RIGHTS RESERVED.
            </p>
            <img src={award} alt="award" className="w-[250px]" />
          </div>
        </div>
    </div>
  );
};

export default Footer;
