import React from "react";
import { useParams } from "react-router-dom";

const InternsWork = () => {
  const { intern } = useParams();
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const firstname = capitalize(intern.split("-")[0]);
  return (
    <div>
      <section className="w-full h-full">
        <div className="flex items-center justify-center gap-4 w-full">
          <h1 className="font-metropolis font-bold text-4xl text-white flex gap-4">
            <span>{firstname}'s</span>
            <span>best works at</span>
          </h1>
          <img
            src="/assets/logo/OOTBFlatWhite.png"
            alt="logo"
            className="w-44"
          />
        </div>
        <div className="justify-center flex items-center mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-auto"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white font-jost  leading-tight text-justify">
            {firstname} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae voluptas facere maxime amet alias nesciunt! Cumque
            voluptatibus laborum laboriosam eveniet ullam animi nemo rem,
            suscipit, iure maiores ipsam minus quod? Quisquam, quae. Quisquam
          </p>
        </div>
      </section>
    </div>
  );
};

export default InternsWork;
