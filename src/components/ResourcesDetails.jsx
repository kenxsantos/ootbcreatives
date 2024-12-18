import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import FixedNavBar from "../components/FixedNavBar";
import NewsBlogs from "./NewsBlogs";
import Templates from "./Templates";
const ResourcesDetails = () => {
  const { slug } = useParams();
  let formattedTitle = slug;
  if (slug === "articles-blogs") {
    formattedTitle = slug.replace("-", " / ");
  }
  if (slug === "stock-images") {
    formattedTitle = slug.replace("-", "  ");
  }

  return (
    <div className="relative bg-clear-planets bg-cover mx-auto h-full">
      <div className="relative">
        <div className="w-full">
          <section className="relative w-1/2 flex flex-col px-12">
            <Link to="/">
              <div className="flex items-center h-36 -ml-12 justify-start">
                <div className="rotate-90 w-36 -ml-[60px]">
                  <img
                    src="/assets/others/BackShadow.webp"
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
          </section>
          <section className="mt-12">
            <div className="-mt-[88px]">
              <h1 className="text-center tracking-tighter font-metropolis text-glow text-white text-xl font-extrabold uppercase xs:mt-20 lg:mt-0">
                {"OOTB " + formattedTitle}
              </h1>
            </div>
            {slug === "articles-blogs" || slug === "news" ? (
              <NewsBlogs />
            ) : (
              <Templates />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDetails;
