import React from "react";
import { SignUpForm } from "./SignupForm/SignupForm";
import logo from "../../../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        <Link to="/" className="m-auto">
          <img src={logo} alt="" className="m-auto w-72"/>
        </Link>
      </div>
      <SignUpForm />
    </div>
  );
};

export default Signup;
