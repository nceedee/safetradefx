import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Badge, Modal, Box, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "../../../../Assets/Images/logo.png";
import { AuthContext } from "../../../Context/AuthContext";
import { auth } from "../../../config/firebase";
import MenuListComposition from "../MenuListComposition/MenuListComposition"; 

const DashboardHeader = ({ routerName }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAgree = async () => {
    setShowModal(false);
    dispatch({ type: "LOGOUT" });

    try {
      await auth.signOut();
      localStorage.setItem("loggedIn", "false");
      navigate("/login");
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

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
            <MenuListComposition onLogoutClick={handleLogoutClick} />
          </div>
        </div>

        <div className="flex p-2 space-x-2 bg-[#070b28]">
          <p>
            <Link to="/">Home</Link>
          </p>
          <ArrowForwardIosIcon />
          <p>{routerName}</p>
        </div>

        <Modal open={showModal} onClose={handleCloseModal}>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <h2>Confirm Logout</h2>
              <p>Are you sure you want to log out?</p>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="contained" onClick={handleAgree}>
                  Yes
                </Button>
                <Button variant="contained" onClick={handleCloseModal}>
                  No
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default DashboardHeader;
