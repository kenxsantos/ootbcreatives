import { useAnimation, motion } from "framer-motion";
import offers from "../json/offers.json";
import { Link } from "react-router-dom";

const Offers = () => {
  const controls = useAnimation();

  return (
    <div className="bg-vertical-planets-3 h-screen  bg-cover flex flex-col justify-center">
      <section className="text-center flex flex-col justify-center lg:pt-20 2xl:pt-28">
        <motion.div
          className="w-1/2 mx-auto"
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-metropolis font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Dive into the realm of{" "}
            <span className="text-orange-red">advertising</span> and let your{" "}
            <span className="text-orange-red">creativity</span>{" "}
            <span className="text-orange-red">shine</span> with us!
          </h1>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8 lg:px-12">
          {offers.map((offer, index) => (
            <Link to={`/ootb/${offer.link}`} key={offer.id} state={{ offer }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex-shrink-0 w-full xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[350px]  lg:w-[300px] lg:h-[350px] xl:w-[350px] xl:h-[400px] bg-gray-500 bg-opacity-60 p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl flex flex-col justify-end h-full hover:cursor-pointer relative overflow-hidden focus:outline-none"
              >
                <div>
                  <h1 className="text-glow text-left text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-garnet text-white leading-none mb-2 uppercase font-jost">
                    {offer.title} <br /> {offer.subtitle}
                  </h1>
                  {(offer.description && (
                    <p className="text-white font-jost text-sm sm:text-base md:text-lg lg:text-xl text-left leading-none">
                      {offer.description}
                    </p>
                  )) ||
                    (offer.list && (
                      <ul className="list-disc pl-5">
                        {Object.values(offer.list).map((listItem, index) => (
                          <li
                            key={index}
                            className="text-white font-jost text-sm sm:text-base md:text-lg lg:text-xl text-left leading-none"
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
  );
};

export default Offers;
