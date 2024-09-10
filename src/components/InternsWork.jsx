import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useAnimation } from "framer-motion";
import WorksModal from "./WorksModal.jsx";

const InternsWork = ({ internData }) => {
  const { intern } = useParams();
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const firstname = capitalize(intern.split("-")[0]);

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const controls = useAnimation();

  const openModal = (item) => {
    setModalContent(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section className="w-full h-full  2xl:px-16 2xl:mt-12 3xl:mt-20">
        <div className="flex items-center justify-center gap-4 w-full xs:flex xs:flex-col">
          <h1 className="font-metropolis font-bold xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-white flex gap-4">
            <span>{firstname}'s</span>
            <span>best works at</span>
          </h1>
          <img
            src="/assets/logo/OOTBFlatWhite.webp"
            alt="logo"
            className="w-40"
          />
        </div>
        <div className="justify-center flex items-center mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {internData &&
              Object.values(internData.works).map((work, workIndex) =>
                Object.values(work.images).map((imageUrl, imgIndex) => (
                  <div
                    key={`${workIndex}-${imgIndex}`}
                    onClick={() => openModal(work)}
                  >
                    <img
                      className="h-auto max-w-auto cursor-pointer"
                      src={imageUrl} // Display each image in the work
                      alt={`${work.project} - image ${imgIndex + 1}`}
                    />
                  </div>
                ))
              )}
          </div>
        </div>

        <div className="mt-4">
          <p className="text-white font-jost leading-tight text-justify">
            {firstname} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vitae voluptas facere maxime amet alias nesciunt! Cumque
            voluptatibus laborum laboriosam eveniet ullam animi nemo rem,
            suscipit, iure maiores ipsam minus quod? Quisquam, quae. Quisquam
          </p>
        </div>
      </section>
      <WorksModal
        isOpen={isOpen}
        close={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default InternsWork;
