import React from "react";

const GlowDiv = () => {
  return (
    <div className=" relative w-[200px] h-[250px] rounded-lg z-10 overflow-hidden flex flex-col items-center justify-center ">
      <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] z-20 bg-gray-400 bg-opacity-95 backdrop-blur-[24px] rounded-md overflow-hidden outline outline-2 outline-white"></div>
      <div className="absolute z-0 top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-red-500 opacity-100 blur-[12px] animate-blob-bounce"></div>
    </div>
  );
};

export default GlowDiv;
