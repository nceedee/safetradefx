import React from "react";
import logo from "../../../../Assets/Images/logo.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import award from "../../../../Assets/Images/broker.png";

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
        <div className="border-t-[1px] border-gray-300 p-4">
          <p className="text-gray-500">
            <span className="font-bold">Risk Warning: </span>CFD and Spot Forex
            trading both come with a high degree of risk. You must be prepared
            to sustain a total loss of any funds deposited with us, as well as
            any additional losses, charges, or other costs we incur in
            recovering any payment from you. Given the possibility of losing
            more than your entire investment, speculation in certain investments
            should only be conducted with risk capital funds that if lost will
            not significantly affect your personal or institution’s financial
            well-being. Before deciding to trade the products offered by us, you
            should carefully consider your objectives, financial situation,
            needs and level of experience. You should also be aware of all the
            risks associated with trading on margin. Please read our{" "}
            <span className="text-red-500">Risk Disclosure document</span>
          </p>
          <p className="mt-8 text-gray-500">
            © Copyright 2024 All Rights Reserved. Safe Trade FX, Uk,London. This
            website is not directed at any jurisdiction and is not intended for
            any use that would be contrary to local law or regulation.
          </p>
          <div className="p-6 mt-10 text-center flex flex-col items-center">
            <p className="text-gray-500">
              © 2024 Safe Trade FX - ALL RIGHTS RESERVED.
            </p>
            <img src={award} alt="award" className="w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
