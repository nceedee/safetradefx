import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Email as EmailIcon,
  Smartphone as SmartphoneIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Notifications as NotificationsIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import logo from "../../../../../Assets/Images/logo.png";
import { menuItems } from "../menuLink";

const DashboardMobileHeader = ({ routerName }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
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
      <div className="bg-[#0f143a] text-[12px] flex items-center justify-between p-2 text-white">
        <div>
          <div>
            <EmailIcon />
            <a href="mailto:safetradef@gmail.com">safetradef@gmail.com</a>
          </div>
          <div>
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
      <div className="bg-[#202b5d] flex items-center justify-around uppercase">
        <div>
          <MenuIcon
            className="text-white"
            sx={{ fontSize: 40 }}
            onClick={toggleDrawer(true)}
          />
        </div>
        <div>
          <img src={logo} alt="" className="w-28 h-28" />
        </div>
        <div className="flex items-center space-x-3">
          <Link to="/">
            <HomeIcon className="text-white" />
          </Link>
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
      <div className="flex p-2 bg-[#0f143a] text-white space-x-2">
        <p>
          <Link to="/">Home</Link>
        </p>
        <ArrowForwardIosIcon />
        <p>{routerName}</p>
      </div>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="relative w-64 h-full bg-[#0f143a] text-white">
          <div
            className="absolute left-[50px] top-0 bottom-0 w-[1px] bg-white"
            style={{ height: "100%" }}
          ></div>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                className={
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : ""
                }
              >
                <ListItemIcon
                  className={
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white"
                  }
                  sx={{ paddingRight: "10px" }} // Added padding to the right
                >
                  {React.cloneElement(item.icon, {
                    className:
                      location.pathname === item.path
                        ? "text-[#609c46]"
                        : "text-white",
                  })}
                </ListItemIcon>
                <ListItemText primary={item.text} className="text-white" />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DashboardMobileHeader;
