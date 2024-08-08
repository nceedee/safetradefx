import React from "react";
import { SignupLayout } from "../../../Layout/LandingPageLayout/SignupLayout/SignupLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { SignUpForm } from "./SignupForm/SignupForm";

const Signup = () => {
  return (
      <div className="bg-blue-100 h-[100vh]">
        <SignUpForm />
      </div>
  );
};

export default Signup;
