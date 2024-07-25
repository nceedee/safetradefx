import React from "react";
import supportimg from "../../../../../Assets/Images/contact-about1.png";
import TheForm from "./TheForm";

const SupportForm = () => {
  return (
    <div className="flex w-full flex-col space-y-10 lg:space-y-0 lg:flex-row justify-around items-center">
      <div className="w-[100%] lg:w-[50%]">
        <img src={supportimg} alt="" />
      </div>
      <div className="w-[100%] lg:w-[50%]">
        <TheForm />
      </div>
    </div>
  );
};

export default SupportForm;
