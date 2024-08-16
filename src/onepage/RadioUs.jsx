import React from "react";

const RadioUs = () => {
  return (
    <div className=" max-w-screen-2xl bg-clear-planets h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-28 flex justify-center items-center h-full">
        <section className="w-full flex">
          <div className="w-1/2 ">
            <h1 className="font-metropolis text-white font-extrabold text-glow  text-right uppercase flex flex-col">
              <span className="text-7xl">Let's Go </span>
              <span className="text-6xl">Interstellar!</span>
            </h1>
          </div>
          <div className="w-1/2  flex flex-col px-12 gap-8">
            <div className="w-full h-16 flex gap-4">
              <div className="w-1/5">
                <h1 className="w-28 h-full flex flex-col font-metropolis text-white font-extrabold uppercase justify-center items-center text-glow text-xl leading-none">
                  <span>Who&apos;s </span>
                  <span>There?</span>
                </h1>
              </div>
              <div className="flex gap-2 w-4/5">
                <div className="border w-28 h-full font-jost text-white  uppercase flex flex-col  justify-center items-center">
                  Client
                </div>
                <div className="border w-28 h-full font-jost text-white  uppercase flex flex-col  justify-center items-center leading-none text-center">
                  Potential Crewmate
                </div>
                <div className="border w-28 h-full font-jost text-white  uppercase flex flex-col  justify-center items-center leading-none text-center">
                  Just Exploring
                </div>
              </div>
            </div>
            <div
              className="relative w-full h-[400px] bg-gray-500 bg-opacity-60 overflow-visible p-8"
              style={{
                clipPath:
                  "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
              }}
            >
              {/* <div
                className="w-[200px] h-[100px] bg-white p-[1px] top-0 absolute "
                style={{
                  clipPath:
                    "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                }}
              >
                <div
                  className="w-full h-full bg-gray-500 bg-opacity-100"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                ></div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RadioUs;
