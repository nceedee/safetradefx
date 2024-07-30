import React from "react";
import { useMediaQuery } from "@mui/material";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DashboardMobileHeader from "./DashboardHeader/DashboardMobileHeader/DashboardMobileHeader";

const DashboardLayout = ({ routerName, children }) => {
  // Use useMediaQuery to check if the screen width is 911px or above
  const isDesktop = useMediaQuery("(min-width:911px)");

  return (
    <div className="bg-[#0f143a] h-[100vh]">
      {isDesktop ? (
        <DashboardHeader routerName={routerName} />
      ) : (
        <DashboardMobileHeader routerName={routerName} />
      )}
      {children}
    </div>
  );
};

export default DashboardLayout;
