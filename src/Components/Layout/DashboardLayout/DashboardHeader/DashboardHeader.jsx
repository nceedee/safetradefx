import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../../../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { Avatar, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DashboardHeader = ({ routerName }) => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    const nameArray = name.split(" ");
    const initials =
      nameArray.length > 1
        ? `${nameArray[0][0]}${nameArray[1][0]}`
        : nameArray[0][0];

    return {
      sx: {
        bgcolor: "#609c46",
      },
      children: initials,
    };
  }

  // Retrieve user details from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.name : "";

  return (
    <div>
      <div className="bg-[#0f143a] text-white ">
        <div className="flex justify-between w-full items-center p-2 text-[12px]">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <EmailIcon />
              <a href="mailto:safetradef@gmail.com">safetradef@gmail.com</a>
            </div>
            <div className="flex items-center space-x-1">
              <SmartphoneIcon />
              <a href="tel:+447404592348">+44 7404 592348</a>
            </div>
          </div>

          <div className="flex space-x-4">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="flex justify-around bg-[#202b5d] uppercase h-40 items-center w-full mt-2">
          <div>
            <img src={logo} alt="logo" className="w-48 h-48" />
          </div>
          <div>
            <ul className="flex space-x-4 ">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#5a65ba] hover:animate-pulse"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-[#5a65ba] hover:animate-pulse"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#5a65ba] hover:animate-pulse"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className="hover:text-[#5a65ba] hover:animate-pulse"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="hover:text-[#5a65ba] hover:animate-pulse"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon
                color="action"
                sx={{ color: "white", cursor: "pointer" }}
                className="hover:animate-bounce"
              />
            </Badge>
            <Avatar
              {...stringAvatar(userName)}
              sx={{ textTransform: "uppercase", backgroundColor: "#609c46" }}
            />
          </div>
        </div>

        <div className="flex p-2 space-x-2">
          <p>
            <Link to="/">Home</Link>
          </p>
          <ArrowForwardIosIcon />
          <p>{routerName}</p>
        </div>

      </div>
    </div>
  );
};

export default DashboardHeader;
