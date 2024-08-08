import React from "react";
import { LoginForm } from "./LoginForm/LoginForm";
import logo from "../../../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pb-6">
      <div>
        <Link to="/" className="m-auto">
          <img src={logo} alt="" className="m-auto w-72" />
        </Link>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
