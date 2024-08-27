import React from "react";
import SearchForm from "./SearchForm";

const Templates = () => {
  return (
    <div className="w-[90%] mx-auto mt-12  h-full flex flex-col gap-4 overflow-auto hide-scrollbar">
      <div>
        <SearchForm />
      </div>
      <div className=" w-full px-8 flex gap-4 overflow-auto hide-scrollbar items-center justify-center">
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        <div className="w-32 h-12 bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
      </div>
      <div className="overflow-auto hide-scrollbar h-[600px] w-full  flex flex-col gap-4">
        <div className=" w-full px-8 flex gap-4 items-center justify-center">
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        </div>
        <div className=" w-full px-8 flex gap-4 items-center justify-center">
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        </div>
        <div className=" w-full px-8 flex gap-4 items-center justify-center">
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
          <div className="w-[400px] h-[300px] bg-gray-500 bg-opacity-40 rounded-md flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
