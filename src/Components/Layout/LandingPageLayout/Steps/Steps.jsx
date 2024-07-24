import React from "react";
import dividerimg from "../../../../Assets/Images/h6-sub-divider-img.png";
import PersonIcon from "@mui/icons-material/Person";
import LaunchIcon from "@mui/icons-material/Launch";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Steps = () => {
  return (
    <div className="border-t py-20">
      <div className="text-center ">
        <h3 className="font-bold text-1xl text-blue-700">Steps</h3>
        <img src={dividerimg} alt="" className="m-auto mt-2" />
      </div>
      <div className="text-center py-20">
        <h1 className="font-bold text-4xl w-[90%] lg:w-[30%] mb-4 m-auto text-center">
          <span className="text-blue-700">Get started</span> in a few minutes
          with us
        </h1>
        <p>Professional solutions for digital asset investors</p>
      </div>

      <div className="flex items-center text-center flex-col lg:flex-row space-y-6 lg:space-y-0 justify-evenly">
        <div className="flex flex-col space-y-2 items-center">
          <PersonIcon
            className="bg-blue-700 text-white rounded-3xl p-5"
            sx={{ fontSize: 90 }}
          />
          <h2 className="font-bold text-2xl">Create an account</h2>
          <p>Register on our platform.</p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <LaunchIcon
            className="bg-blue-700 text-white rounded-3xl p-5"
            sx={{ fontSize: 90 }}
          />
          <h2 className="font-bold text-2xl">Select Investment Plan</h2>
          <p>Select your preferred investment plan.</p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <MonetizationOnIcon
            className="bg-blue-700 text-white rounded-3xl p-5"
            sx={{ fontSize: 90 }}
          />
          <h2 className="font-bold text-2xl">Earn</h2>
          <p>Get your returns conveniently.</p>
        </div>
      </div>
      <div className="text-center ">
        <button className="bg-[#548539] font-bold text-white p-4 px-7 rounded-md mt-14">
          Get Started Now!!
        </button>
      </div>
    </div>
  );
};

export default Steps;
