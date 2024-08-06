import React from "react";
import { motion } from "framer-motion";
import interns from "../json/interns.json";
import DropdownButton from "./DropdownButton";
const InternsProfile = ({ index }) => {
  const width = 530;
  return (
    <div>
      <div className="mb-8 flex gap-12 justify-end items-center px-6">
        <h1 className="text-white font-metropolis text-3xl text-center font-bold">
          Meet the interns!
        </h1>
        <DropdownButton />
      </div>
      <div className="flex flex-col items-center justify-center">
        {interns.map((intern, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="shadow-inner-crewmates rounded-3xl flex flex-col justify-start h-60 -mb-20 p-4"
            style={{ width: `${width + index * 20}px` }}
          >
            <div className="flex gap-1 mb-2 items-center justify-center">
              {Object.values(intern["batch-1"]).map((item, index) => (
                <div className="w-24 flex" key={index}>
                  {item.image ? (
                    <img
                      className="rounded-sm"
                      src="https://randomuser.me/api/portraits/women/84.jpg"
                      alt={item.name}
                    />
                  ) : (
                    <img
                      className="rounded-sm"
                      src="https://randomuser.me/api/portraits/women/84.jpg"
                      alt={item.name}
                    />
                  )}
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-white font-jost text-base uppercase text-center">
                Batch {index + 1}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternsProfile;
