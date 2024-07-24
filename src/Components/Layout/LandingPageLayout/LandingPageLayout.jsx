import React from "react";
import { useMediaQuery } from "react-responsive";
import LandingPageHeader from "./LandingPageLayoutHeader/LandingPageHeader";
import { LandingPageMobileHeader } from "./LandingPageLayoutHeader/LandingPageMobileHeader/LandingPageMobileHeader";

const LandingPageLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <LandingPageMobileHeader /> : <LandingPageHeader />}</div>
  );
};

export default LandingPageLayout;
