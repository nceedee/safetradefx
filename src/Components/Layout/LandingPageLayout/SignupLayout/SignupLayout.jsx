import React from "react";
import { useMediaQuery } from "react-responsive";
import SignupPageHeader from "./SignupPageLayoutHeader/SignupPageHeader";
import { SignupPageMobileHeader } from "./SignupPageLayoutHeader/SignupPageMobileHeader/SignupPageMobileHeader";
export const SignupLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <SignupPageMobileHeader /> : <SignupPageHeader />}</div>
  );
};
