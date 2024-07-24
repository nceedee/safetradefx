import React from "react";
import insidebg from "../../../../Assets/Images/insidebg.png";

const InsideBg = () => {
  return (
    <div className="relative w-full hidden lg:block ">
      <img src={insidebg} alt="" className="w-full  fixed bottom-0" />
    </div>
  );
};

export default InsideBg;
