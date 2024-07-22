import React from "react";
import FixedNavBar from "../components/FixedNavBar";
import { IoIosArrowBack } from "react-icons/io";
import services from "../json/services.json";
import { useParams, Link } from "react-router-dom";
import HighlightText from "../components/HighlightText";
const ShowServices = () => {
  const { slug } = useParams(); // Access the slug sfrom the URL
  const service = services.find((p) => p.link === slug);
  if (!service) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative max-w-screen-2xl bg-indexbg bg-cover mx-auto">
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/others/ShadowOverlay4.png"
          alt="Overlay"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <FixedNavBar />
        <div className="px-12 w-full flex">
          <section className="w-1/2 flex flex-col">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start ">
                <div className="rotate-90 w-36 -ml-[60px]">
                  <img
                    src="/assets/others/BackShadow.png"
                    alt="Back Flare"
                    className="transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:text-glow"
                  />
                </div>
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
              <section className="w-max p-4 font-jost text-white border mb-12">
                <Link to="/">COME ONBOARD NOW</Link>
              </section>
            </div>
          </section>
          <section className="relative w-1/2 flex flex-col pt-36 overflow-auto h-[630px] hide-scrollbar">
            <div className="px-8">
              <div className="font-metropolis text-2xl font-bold text-white text-center mb-4">
                <HighlightText
                  text={service.heading.text}
                  highlight={service.heading.highlight}
                  highlightClassName="text-orange"
                />
              </div>
              <div className="bg-opacity-30 bg-gray-50 px-8 pt-4 pb-4 rounded-xl">
                {service.description &&
                  Object.values(service.description).map((desc, index) => (
                    <p
                      key={index}
                      className="font-jost text-white text-sm  text-justify"
                    >
                      {desc}
                    </p>
                  ))}
              </div>
              <div className="w-full mt-8 mb-4 rounded-xl ">
                {service.images &&
                  Object.values(service.images).map((img, index) => (
                    <div
                      key={index}
                      className=" border border-orange mb-4 rounded-xl"
                    >
                      <div>
                        <img src={img} alt="" className="rounded-t-xl" />
                      </div>
                      <div className="bg-opacity-80 bg-gray-700 px-8 pt-4 pb-4 rounded-b-xl">
                        <p className="font-jost text-white text-sm  text-justify">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus itaque repudiandae ullam provident
                          officiis accusantium minima id eum nisi maxime?
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="sticky w-full bottom-0 pointer-events-none">
              <img
                src="/assets/others/BottomShadow.png"
                alt="Bottom Shadow"
                className="w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowServices;
