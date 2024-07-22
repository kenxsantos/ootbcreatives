import clients from "../json/clients.json";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import ClientsModal from "./ClientsModal";
const ClientsOnboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const controls = useAnimation();
  const containerRef = useRef(null);

  const openModal = (item) => {
    setModalContent(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
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
  }, [controls]);

  // Create an array with duplicated clientsOnboard items
  const duplicatedClientsOnboard = [];
  clients.forEach((client) => {
    Object.keys(client.clientsOnboard).forEach((key) => {
      if (key !== "id") {
        duplicatedClientsOnboard.push(client.clientsOnboard[key]);
      }
    });
  });
  const allClientsOnboard = [
    ...duplicatedClientsOnboard,
    ...duplicatedClientsOnboard,
  ];

  return (
    <div>
      <div className="font-jost text-white text-base">CLIENTS ONBOARD</div>
      <div className="w-full mt-4 overflow-hidden">
        <motion.div
          className="flex gap-4 w-max h-full hide-scrollbar"
          animate={controls}
        >
          {allClientsOnboard.map((clientsOnboardItem, idx) => (
            <div
              key={idx}
              onClick={() => openModal(clientsOnboardItem)}
              className="h-36 w-[270px] rounded-2xl bg-white shadow-inner-clients flex items-center hover:cursor-pointer"
            >
              {clientsOnboardItem.logo && (
                <img
                  src={clientsOnboardItem.logo}
                  alt={clientsOnboardItem.brand}
                  className="w-full p-8"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
      <ClientsModal
        isOpen={isOpen}
        close={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default ClientsOnboard;
