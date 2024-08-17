import React from "react";
import { MdEmail, MdBusiness } from "react-icons/md";

const ClientForm = () => {
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
          <div class="relative w-full min-w-[200px] h-10  flex items-center gap-2">
            <MdBusiness size={24} color="white" />
            <input
              class="peer w-full h-full bg-transparent text-white font-jost text-base  outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2    px-3 py-2.5 rounded-sm border-blue-gray-200 "
              placeholder="COMPANY OR BUSINESS NAME"
            />
          </div>
        </div>
        <div class="w-full mb-4">
          <div class="relative w-full min-w-[200px] h-10  flex items-center gap-2">
            <img src="/assets/logo/OOTBLogoRed.png" alt="" className="w-6" />

            <select
              id="countries"
              className="bg-transparent font-jost border border-gray-300 text-white text-base rounded-sm focus:border-white block w-full p-2 z-50 focus:outline-none"
            >
              <option
                selected
                className="font-jost bg-gray-500 bg-opacity-60  text-gray-300"
              >
                -- DESIRED SERVICE FROM US --
              </option>
              <option
                value="US"
                className="font-jost bg-gray-500 bg-opacity-60  text-white"
              >
                Copywriting
              </option>
              <option
                value="CA"
                className="font-jost bg-gray-500 bg-opacity-60  text-white"
              >
                Multimedia
              </option>
              <option
                value="FR"
                className="font-jost bg-gray-500 bg-opacity-60  text-white"
              >
                Videographer
              </option>
              <option
                value="DE"
                className="font-jost bg-gray-500 bg-opacity-60  text-white"
              >
                Web Developer
              </option>
            </select>
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

export default ClientForm;
