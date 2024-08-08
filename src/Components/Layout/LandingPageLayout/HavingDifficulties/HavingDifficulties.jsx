import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";

const HavingDifficulties = () => {
  return (
    <div className=" text-gray-700 bg-blue-100 flex items-center py-14 h-[670px]">
      <div className="w-[95%] lg:w-[70%]  m-auto">
        <div className="text-center">
          <h1 className="text-4xl">Having an difficulty?</h1>
          <p>
            Our award winning support team is on ground to help you out within
            few minutes. We can be reached through the following medium.
          </p>
        </div>
        <div className="flex flex-col justify-between translate-y-20 items-center lg:flex-row ">
          <div className="flex flex-col items-center">
            <RiCustomerService2Line className="text-8xl text-blue-900" />

            <h1 className="text-blue-900 text-3xl font-bold">24/7 Live Chat</h1>
            <p>
              Click the chat button below to start a conversation with one of
              our agents.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineMailOpen className="text-8xl text-blue-900" />

            <h1 className="text-blue-900 text-3xl font-bold">Support Email</h1>
            <p>
              <a href="mailto:safetradef@gmail.com">[Protected Email]</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HavingDifficulties;
