import React from "react";

const ServicesCard = ({ title, subtitle, backgroundClass }) => {
  return (
    <div
      className={`w-1/4 rounded-2xl p-8 h-48 items-end flex ${backgroundClass}`}
    >
      <h1 className="flex flex-col leading-none font-metropolis text-white font-bold text-2xl">
        <span>{title}</span>
        <span>{subtitle}</span>
      </h1>
    </div>
  );
};

export default ServicesCard;
