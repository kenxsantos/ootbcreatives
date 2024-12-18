import React, { useState, useEffect, useMemo } from "react";
import { useAnimation, motion } from "framer-motion";
import ClientForm from "../components/ClientForm";
import CrewmatesForm from "../components/CrewmatesForm";
import ExplorersForm from "../components/ExplorersForm";

const formComponents = {
  Client: ClientForm,
  "Potential Crewmate": CrewmatesForm,
  "Just Exploring": ExplorersForm,
};

const options = ["Client", "Potential Crewmate", "Just Exploring"];

const RadioUs = () => {
  const [activeOption, setActiveOption] = useState("Client");
  const controls = useAnimation();
  const [name, setName] = useState("");

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [activeOption, controls]);

  const ActiveForm = useMemo(
    () => formComponents[activeOption],
    [activeOption]
  );

  return (
    <div className="bg-vertical-planets-4 h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-14 flex justify-center items-center h-full">
        <section className="w-full xl:flex">
          {/* Heading Section */}
          <motion.div
            animate={controls}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="xs:w-full xl:w-1/2 flex items-center xs:justify-center xl:justify-end"
          >
            <h1 className="font-metropolis text-white font-extrabold text-glow xs:text-center xl:text-right uppercase flex flex-col">
              <span className="xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-8xl">
                Let's Go
              </span>
              <span className="xs:text-4xl sm:text-5xl xl:text-7xl 3xl:text-8xl">
                Interstellar!
              </span>
            </h1>
          </motion.div>

          {/* Form Section */}
          <div className="xs:w-full xs:mt-4 xl:w-1/2 flex flex-col xs:px-2 md:px-12 gap-6 items-center">
            {/* Options */}
            <div className="w-full xs:h-full sm:h-16 sm:flex gap-4 justify-center text-center">
              <div className="flex justify-center">
                <h1 className="w-28 flex flex-col font-metropolis text-white font-extrabold uppercase justify-center items-center text-glow text-xl leading-none">
                  <span>Who&apos;s </span>
                  <span>There?</span>
                </h1>
              </div>
              <div className="flex gap-2 xs:h-16 sm:h-full xs:mt-4 sm:mt-0">
                {options.map((option) => (
                  <motion.div
                    key={option}
                    className={`border w-28 h-full font-jost text-white uppercase text-center flex flex-col justify-center items-center cursor-pointer ${
                      activeOption === option
                        ? "bg-gray-500 bg-opacity-500 text-white border-0"
                        : "bg-transparent"
                    }`}
                    onClick={() => setActiveOption(option)}
                    animate={{ opacity: activeOption === option ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{option}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div
              className="relative mb-4 w-full 3xl:w-4/5 xs:h-[370px] sm:h-[470px] lg:h-[570px] xl:h-[500px] bg-gray-500 bg-opacity-50 overflow-auto p-8"
              style={{
                clipPath:
                  "polygon(7% 0%, 93% 0%, 100% 7%, 100% 93%, 93% 100%, 7% 100%, 0% 93%, 0% 7%)",
              }}
            >
              <div className="w-full xs:flex-col flex sm:flex-row">
                {/* Input Field */}
                <div className="xs:w-full sm:w-1/2 flex justify-end flex-col xs:order-last sm:order-first xs:mt-4 sm:mt-0">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="font-jost text-white peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-base font-normal outline-none placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="font-jost absolute left-0 -top-1.5 text-sm text-gray-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-blue-gray-500 peer-focus:-top-1.5 peer-focus:text-gray-300 transition-all">
                      YOUR NAME
                    </label>
                  </div>
                </div>

                {/* Logo */}
                <div className="xs:w-full sm:w-1/2 flex xs:justify-center sm:justify-end px-8">
                  <img
                    src="/assets/logo/OOTBLogoRed.webp"
                    alt="OOTB Logo"
                    className="h-24"
                  />
                </div>
              </div>

              {/* Active Form */}
              <ActiveForm name={name} setName={setName} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RadioUs;
