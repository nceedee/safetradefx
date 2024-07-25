import React from "react";
import { useMediaQuery } from "react-responsive";
import PlansPageHeader from "./PlansPageLayoutHeader/PlansPageHeader";
import { PlansPageMobileHeader } from "./PlansPageLayoutHeader/PlansPageMobileHeader/PlansPageMobileHeader";
export const PlansLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <PlansPageMobileHeader /> : <PlansPageHeader />}</div>
  );
};
