import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import ClientForm from "../components/ClientForm";
import CrewmatesForm from "../components/CrewmatesForm";
import ExplorersForm from "../components/ExplorersForm";
const RadioUs = () => {
  const [activeOption, setActiveOption] = useState("Client");
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 3000) {
        controls.start({ y: 0 }); // Adjust the y value and opacity
      } else {
        controls.start({ y: -300 }); // Initial state when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const renderForm = () => {
    switch (activeOption) {
      case "Client":
        return <ClientForm />;
      case "Potential Crewmate":
        return <CrewmatesForm />;
      case "Just Exploring":
        return <ExplorersForm />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-clear-planets h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-14 flex justify-center items-center h-full">
        <section className="w-full xl:flex">
          <motion.div
            animate={controls}
            transition={{ duration: 0.3 }}
            className="xs:w-full xl:w-1/2 flex items-center  xs:justify-center xl:justify-end"
          >
            <h1 className="font-metropolis text-white font-extrabold text-glow xs:text-center xl:text-right uppercase flex flex-col">
              <span className="xs:text-5xl sm:text-6xl xl:text-8xl 3xl:text-9xl">
                Let's Go
              </span>
              <span className="xs:text-4xl sm:text-5xl xl:text-7xl 3xl:text-8xl">
                Interstellar!
              </span>
            </h1>
          </motion.div>
          <div className="xs:w-full xs:mt-4 xl:w-1/2 flex flex-col xs:px-2 md:px-12 gap-6 items-center">
            <div className="w-full xs:h-full sm:h-16 sm:flex gap-4 justify-center text-center">
              <div className="flex justify-center">
                <h1 className="w-28 flex flex-col font-metropolis text-white font-extrabold uppercase justify-center items-center text-glow text-xl leading-none">
                  <span>Who&apos;s </span>
                  <span>There?</span>
                </h1>
              </div>
              <div className="flex gap-2 xs:h-16 sm:h-full xs:mt-4 sm:mt-0 ">
                {["Client", "Potential Crewmate", "Just Exploring"].map(
                  (option) => (
                    <motion.div
                      key={option}
                      className={`border w-28 h-full font-jost text-white uppercase text-center flex flex-col justify-center items-center cursor-pointer ${
                        activeOption === option
                          ? "bg-gray-500 bg-opacity-500 text-white border-0"
                          : "bg-transparent"
                      }`}
                      onClick={() => setActiveOption(option)}
                      animate={{
                        opacity: activeOption === option ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {option}
                    </motion.div>
                  )
                )}
              </div>
            </div>
            <div
              className="relative mb-4 w-full 3xl:w-4/5 xs:h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[480px] bg-gray-500 bg-opacity-50 overflow-auto p-8 hide-scrollbar"
              style={{
                clipPath:
                  "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
              }}
            >
              <div className="w-full mb-10 xs:flex-col flex sm:flex-row">
                <div className="xs:w-full sm:w-1/2 flex justify-end flex-col xs:order-last sm:order-first xs:mt-4 sm:mt-0">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      placeholder="ex. John Doe"
                      className="font-jost text-white peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-base font-normal outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="font-jost after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none truncate text-sm leading-tight text-gray-300 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-300 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      YOUR NAME
                    </label>
                  </div>
                </div>
                <div className="xs:w-full sm:w-1/2 flex xs:justify-center sm:justify-end px-8">
                  <img
                    src="/assets/logo/OOTBLogoRed.png"
                    alt=""
                    className="h-24"
                  />
                </div>
              </div>
              {renderForm()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RadioUs;
