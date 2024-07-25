import React from "react";
import { useMediaQuery } from "react-responsive";
import AboutPageHeader from "./AboutPageLayoutHeader/AboutPageHeader"; 
import { AboutPageMobileHeader } from "./AboutPageLayoutHeader/AboutPageMobileHeader/AboutPageMobileHeader"; 
export const AboutLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <AboutPageMobileHeader /> : <AboutPageHeader />}</div>
  );
};
