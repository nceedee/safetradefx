import React from "react";
import { useMediaQuery } from "react-responsive";
import LoginPageHeader from "./LoginPageLayoutHeader/LoginPageHeader";
import { LoginPageMobileHeader } from "./LoginPageLayoutHeader/LoginPageMobileHeader/LoginPageMobileHeader";
export const LoginLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <div>{isMobile ? <LoginPageMobileHeader /> : <LoginPageHeader />}</div>
  );
};
