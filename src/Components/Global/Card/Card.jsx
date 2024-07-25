import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`shadow-custom rounded-md bg-secondary text-white p-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
