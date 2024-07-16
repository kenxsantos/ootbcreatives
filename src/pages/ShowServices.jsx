import React from "react";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosArrowBack } from "react-icons/io";
import services from "../json/services.json";
import { useParams, Link } from "react-router-dom";
const ShowServices = () => {
  const { slug } = useParams(); // Access the slug sfrom the URL
  const service = services.find((p) => p.link === slug);
  if (!service) {
    return <div>Project not found</div>;
  }
  return (
    <div className="max-w-screen-2xl bg-indexbg bg-cover">
      <FixedNavBar />
      <div className="px-12 w-full flex pb-20">
        <section className="w-1/2 flex flex-col">
          <Link to="/">
            <div className="flex items-center h-36">
              <span className="text-white font-jost flex items-center gap-4 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow">
                <IoIosArrowBack size={24} />
                BACK TO OTHER SERVICES
              </span>
            </div>
          </Link>
          <div className="ml-10">
            <section className="mb-4">
              <h1
                key={service.id}
                className="font-metropolis font-bold text-6xl flex flex-col leading-none text-white tracking-tighter"
              >
                <span className="text-orange">{service.title}</span>
                <span className="text-purple">{service.subtitle}</span>
              </h1>
            </section>
            <section>
              {service.offers && (
                <ol className="list-decimal-none">
                  {Object.values(service.offers).map((offer, index) => (
                    <Link
                      key={index}
                      to={`#${offer.replace(/\s+/g, "").toLowerCase()}`}
                    >
                      <li className="font-jost text-white transition-all duration-300 ease-in-out  hover:text-glow hover:cursor-pointer">
                        {offer}
                      </li>
                    </Link>
                  ))}
                </ol>
              )}
            </section>
            <section className="py-8">
              <h1 className="font-jost text-base text-white">
                {service.subheading}
              </h1>
            </section>
            <section className="w-max p-4 font-jost text-white border">
              COME ONBOARD NOW
            </section>
          </div>
        </section>
        <section className="w-1/2 flex flex-col pt-36 px-8 overflow-auto h-[600px] hide-scrollbar">
          <div className="font-metropolis text-2xl font-bold text-white text-center mb-4">
            {service.heading}
          </div>
          <div className="bg-opacity-80 bg-gray-600 px-8 pt-4 rounded-xl">
            {service.description &&
              Object.values(service.description).map((desc, index) => (
                <p
                  key={index}
                  className="font-jost text-white text-sm mb-4 text-justify"
                >
                  {desc}
                </p>
              ))}
          </div>
          <div className="w-full mt-8 mb-4 rounded-xl">
            {service.images &&
              Object.values(service.images).map((img, index) => (
                <div key={index} className="mb-4">
                  <img
                    src={img}
                    alt=""
                    className="rounded-xl border-2 border-orange"
                  />
                  {/* <div className="flex justify-between font-jost text-white p-4">
                    <div>YEAR</div>
                    <h1 className="flex flex-col leading-none text-sm">
                      <span>BEHIND THE SCENE</span>
                      <span>EVENT NAME</span>
                    </h1>
                    <div>FABRICATION</div>
                  </div> */}
                </div>
              ))}
          </div>
          {/* <div id="planning">This is planning</div> */}
        </section>
      </div>
    </div>
  );
};

export default ShowServices;
