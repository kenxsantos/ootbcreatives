import React from "react";
import offers from "../json/offers.json";
import GlowDiv from "../components/GlowDiv";
const Offers = () => {
  return (
    <div className=" max-w-screen-2xl bg-blurred-planets h-screen mx-auto bg-cover">
      <div className="w-full mx-auto pt-28 flex justify-center  items-center border-4 border-black h-full">
        <section className="mx-auto text-center flex flex-col justify-center boder px-28">
          <div>
            <h1 className="font-metropolis font-bold text-white text-4xl ">
              DIVE INTO THE REALM OF ADVERTISING AND LET YOUR CREATIVITY SHINE
              WITH US!
            </h1>
          </div>
          <div className=" flex mt-4 justify-center gap-12">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="w-64 h-72 rounded-2xl bg-gray-500 p-6 flex flex-col justify-end"
              >
                {offer.academy && (
                  <div>
                    <h1 className="text-glow text-left text-xl font-bold font-metropolis text-white leading-none mb-2 uppercase">
                      {offer.academy.title} <br /> {offer.academy.subtitle}
                    </h1>
                    <p className="text-white font-jost text-base text-left leading-none">
                      {offer.academy.description}
                    </p>
                  </div>
                )}
                {offer.careers && (
                  <div>
                    <h1 className="text-glow text-left text-xl font-bold font-metropolis text-white leading-none mb-2 uppercase">
                      {offer.careers.title} <br /> {offer.careers.subtitle}
                    </h1>
                    <p className="text-white font-jost text-base text-left leading-none">
                      {offer.careers.description}
                    </p>
                  </div>
                )}
                {offer.resources && (
                  <div>
                    <h1 className="text-glow text-left text-xl font-bold font-metropolis text-white relative leading-none mb-2 uppercase">
                      {offer.resources.title}
                    </h1>
                    <ul>
                      {Object.values(offer.resources.list).map((item, idx) => (
                        <li
                          key={idx}
                          className="text-white font-jost text-base text-left leading-none"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;
