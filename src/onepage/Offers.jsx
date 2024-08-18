import React from "react";
import offers from "../json/offers.json";
import { motion } from "framer-motion";
import GlowDiv from "../components/GlowDiv.jsx";
import { Link } from "react-router-dom";
const Offers = () => {
  return (
    <div className=" max-w-screen-2xl bg-blurred-planets h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-28 flex justify-center  items-center h-full">
        <section className="mx-auto text-center flex flex-col justify-center boder px-28">
          <div>
            <h1 className="font-metropolis font-bold text-white text-4xl ">
              DIVE INTO THE REALM OF ADVERTISING AND LET YOUR CREATIVITY SHINE
              WITH US!
            </h1>
          </div>
          <div className=" flex mt-4 justify-center gap-12">
            {offers.map((offer, index) => (
              <Link to={`/ootb/${offer.link}`} key={offer.id} state={{ offer }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  key={index}
                  className="w-64 h-72 bg-gray-500 bg-opacity-60 p-6 rounded-2xl flex flex-col justify-end hover:cursor-pointer"
                >
                  <div>
                    <h1 className="z-50 text-glow text-left text-xl font-bold font-metropolis text-white leading-none mb-2 uppercase">
                      {offer.title} <br /> {offer.subtitle}
                    </h1>
                    {(offer.description && (
                      <p className="text-white font-jost text-base text-left leading-none">
                        {offer.description}
                      </p>
                    )) ||
                      (offer.list && (
                        <ul>
                          {Object.values(offer.list).map((listItem, index) => (
                            <li
                              key={index}
                              className="text-white font-jost text-base text-left leading-none"
                            >
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
