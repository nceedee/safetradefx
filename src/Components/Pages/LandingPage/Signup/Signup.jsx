import React from "react";
import { SignupLayout } from "../../../Layout/LandingPageLayout/SignupLayout/SignupLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { SignUpForm } from "./SignupForm/SignupForm";

const Signup = () => {
  return (
    <div>
      <div className="relative z-30 bg-blue-100">
        <SignUpForm />
      </div>
     
    </div>
  );
};

export default Signup;
