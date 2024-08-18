import React from "react";
import { MdEmail, MdBusiness } from "react-icons/md";

const ExplorersForm = () => {
  return (
    <div className=" w-full  flex flex-col px-8">
      <form className="w-full ">
        <div class="w-full mb-4">
          <div class="relative w-full min-w-[200px] h-10  flex items-center gap-2">
            <MdEmail size={24} color="white" />
            <input
              class="peer w-full h-full bg-transparent text-white font-jost text-base outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  px-3 py-2.5 rounded-sm border-blue-gray-200"
              placeholder="EMAIL ADDRESS"
            />
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="relative w-full min-w-[200px] h-50 flex justify-center  gap-2">
            <img
              src="/assets/logo/OOTBLogoRed.png"
              alt=""
              className="w-6 h-full mt-1"
            />
            <textarea
              id="message"
              rows="4"
              class=" p-2.5 w-full text-white bg-transparent font-jost text-base rounded-sm border border-gray-300 focus:ring-white focus:border-white focus:outline-none"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>

        <div className="pl-8 ">
          <input
            type="submit"
            value="SUBMIT"
            className="font-jost text-white  text-base  rounded-sm px-4 py-2 w-full bg-purple"
          />
        </div>
      </form>
    </div>
  );
};

export default ExplorersForm;
