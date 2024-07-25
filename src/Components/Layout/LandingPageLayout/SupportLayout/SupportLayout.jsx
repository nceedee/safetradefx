import React from "react";
import { useMediaQuery } from "react-responsive";
import SupportPageHeader from "./SupportPageLayoutHeader/SupportPageHeader";
import { SupportPageMobileHeader } from "./SupportPageLayoutHeader/SupportPageMobileHeader/SupportPageMobileHeader";
export const SupportLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <SupportPageMobileHeader /> : <SupportPageHeader />}</div>
  );
};
