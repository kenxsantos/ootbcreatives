import React from "react";
import { IoIosAdd } from "react-icons/io";
const Index = () => {
  return (
    <div className="max-w-screen-2xl mt-20 -ml-12">
      <section className="w-52 h-52">
        <img src="../../public/assets/OOTBLogoWhite.png" alt="" srcset="" />
      </section>
      <section>
        <h1 className="text-left text-[51px] leading-none text-white font-metropolis font-extrabold">
          <span>EXPLORE THE WORLD OF</span>
          <br />
          <span>ADVERTISING WITH US!</span>
        </h1>
      </section>
      <section className="py-4">
        <h1 className="text-left text-lg leading-none text-white font-jost">
          Are you ready to start a wonderful journey?...
        </h1>
      </section>
      <section className="py-4 text-left -mt-4">
        <div class="inline-flex items-center rounded-full bg-gray-50  bg-opacity-30 px-4 py-1 text-xs text-white font-jost">
          READ MORE
        </div>
      </section>
    </div>
  );
};

export default Index;
