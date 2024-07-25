import React from "react";

const MaxCard = ({ children, className }) => {
  return (
    <div className="w-full p-3">
      <div className={`m-auto h-full w-full max-w-7xl ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MaxCard;
