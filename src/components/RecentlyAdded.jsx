import clients from "../json/clients.json";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ClientsModal from "./ClientsModal";

const RecentlyAdded = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const controls = useAnimation();

  const openModal = (item) => {
    setModalContent(item);
    setIsOpen(true);
    controls.stop(); // Stop the animation when modal opens
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      // Start the infinite animation
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Adjust the duration to control speed
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isOpen, controls]);

  const duplicatedRecentlyAdded = [];
  clients.forEach((client) => {
    Object.keys(client.recently).forEach((key) => {
      if (key !== "id") {
        duplicatedRecentlyAdded.push(client.recently[key]);
      }
    });
  });
  const allRecentlyAdded = [
    ...duplicatedRecentlyAdded,
    ...duplicatedRecentlyAdded,
  ];

  return (
    <div>
      <div className="font-jost text-white text-base">RECENTLY ADDED</div>
      <div className="overflow-hidden py-4 -mt-2">
        <div className="w-full">
          <motion.div
            className="flex gap-4 w-max h-full hide-scrollbar"
            animate={controls}
          >
            {allRecentlyAdded.map((recentlyAddedItem, idx) => (
              <motion.div
                key={idx}
                onClick={() => openModal(recentlyAddedItem)}
                className="relative xs:w-[250px] xs:h-36 md:h-36 md:w-[270px] rounded-2xl bg-white shadow-inner-clients flex items-center hover:cursor-pointer"
                whileTap={{ scale: 1.1 }}
                whileHover={{
                  scale: 1.1,
                  margin: "0px 12px",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <div className="bg-orange bg-[#F38920] rounded-full -mb-2 bottom-0 absolute w-full border-4 border-[#F38920] text-center text-white font-jost text-xs">
                  RECENTLY ADDED
                </div>
                {recentlyAddedItem.logo && (
                  <img
                    src={recentlyAddedItem.logo}
                    alt={recentlyAddedItem.brand}
                    className="w-full p-8"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <ClientsModal
        isOpen={isOpen}
        close={() => {
          closeModal();
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust the duration to control speed
                ease: "linear",
              },
            },
          });
        }}
        modalContent={modalContent}
      />
    </div>
  );
};

export default RecentlyAdded;
