import React from "react";
import { LoginLayout } from "../../../Layout/LandingPageLayout/LoginLayout/LoginLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { LoginForm } from "./LoginForm/LoginForm";

const Login = () => {
  return (
      <div className="bg-blue-100 h-[100vh]">
        <LoginForm />
      </div>
  );
};

export default Login;
