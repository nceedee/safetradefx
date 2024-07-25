import React from "react";
import { LoginLayout } from "../../../Layout/LandingPageLayout/LoginLayout/LoginLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { LoginForm } from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="relative z-40">
        <LoginLayout />
      </div>
      <div className="relative z-30 bg-white">
        <LoginForm/>
      </div>
      <div className="bg-[#000624] text-white">
        <Footer />
        <p className="text-center pb-5">
          All right reversed 2024 &#169; safe trade fx
        </p>
      </div>
    </div>
  );
};

export default Login;
