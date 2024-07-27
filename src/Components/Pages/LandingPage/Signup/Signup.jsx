import React from "react";
import { SignupLayout } from "../../../Layout/LandingPageLayout/SignupLayout/SignupLayout";
import Footer from "../../../Layout/LandingPageLayout/Footer/Footer";
import { SignUpForm } from "./SignupForm/SignupForm";

const Signup = () => {
  return (
    <div>
      <div className="relative z-40">
        <SignupLayout />
      </div>
      <div className="relative z-30 bg-white">
        <SignUpForm />
      </div>
      <div className="bg-[#000624] text-white">
        <Footer />
        <p className="text-center pb-5">
          All right reserved 2024 &#169; safe trade fx
        </p>
      </div>
    </div>
  );
};

export default Signup;
