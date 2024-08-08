import React from "react";
import { LoginLayout } from "../../../Layout/LandingPageLayout/LoginLayout/LoginLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { LoginForm } from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <div className="relative z-30 bg-blue-100">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
