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
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                key={index}
                className="w-64 h-72 bg-gray-400 p-6 rounded-2xl flex flex-col justify-end hover:cursor-pointer"
              >
                {offer.academy && (
                  <Link
                    to={`/ootb/${offer.academy.link}`}
                    key={offer.academy.id}
                  >
                    <div>
                      <h1 className="z-50 text-glow text-left text-xl font-bold font-metropolis text-white leading-none mb-2 uppercase">
                        {offer.academy.title} <br /> {offer.academy.subtitle}
                      </h1>
                      <p className="text-white font-jost text-base text-left leading-none">
                        {offer.academy.description}
                      </p>
                    </div>
                  </Link>
                )}
                {offer.careers && (
                  <Link
                    to={`/ootb/${offer.careers.link}`}
                    key={offer.careers.id}
                  >
                    <div>
                      <h1 className="text-glow text-left text-xl font-bold font-metropolis text-white leading-none mb-2 uppercase">
                        {offer.careers.title} <br /> {offer.careers.subtitle}
                      </h1>
                      <p className="text-white font-jost text-base text-left leading-none">
                        {offer.careers.description}
                      </p>
                    </div>
                  </Link>
                )}
                {offer.resources && (
                  <Link
                    to={`/ootb/${offer.resources.link}`}
                    key={offer.resources.id}
                  >
                    <div>
                      <h1 className="text-glow text-left text-xl font-bold font-metropolis text-white relative leading-none mb-2 uppercase">
                        {offer.resources.title}
                      </h1>
                      <ul>
                        {Object.values(offer.resources.list).map(
                          (item, idx) => (
                            <li
                              key={idx}
                              className="text-white font-jost text-base text-left leading-none"
                            >
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
