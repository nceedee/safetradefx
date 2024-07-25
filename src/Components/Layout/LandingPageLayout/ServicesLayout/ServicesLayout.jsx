import React from "react";
import { useMediaQuery } from "react-responsive";
import ServicePageHeader from "./ServicePageLayoutHeader/ServicePageHeader";
import { ServicePageMobileHeader } from "./ServicePageLayoutHeader/ServicePageMobileHeader/ServicePageMobileHeader"; 
export const ServicesLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <ServicePageMobileHeader /> : <ServicePageHeader />}</div>
  );
};
