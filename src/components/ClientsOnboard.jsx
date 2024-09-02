import clients from "../json/clients.json";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ClientsModal from "./ClientsModal";
const ClientsOnboard = () => {
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

  useEffect(() => {
    // Start the infinite animation
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 80, // Adjust the duration to control speed
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
      <div className="overflow-hidden py-2">
        <div className="w-full">
          <motion.div
            className="flex gap-4 w-max h-full hide-scrollbar"
            animate={controls}
          >
            {allClientsOnboard.map((clientsOnboardItem, idx) => (
              <motion.div
                key={idx}
                onClick={() => openModal(clientsOnboardItem)}
                className="xs:w-[250px] xs:h-36 md:h-36 md:w-[270px] rounded-2xl bg-white shadow-inner-clients flex items-center justify-center hover:cursor-pointer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 1.1, margin: "0px 12px" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {clientsOnboardItem.logo && (
                  <img
                    src={clientsOnboardItem.logo}
                    alt={clientsOnboardItem.brand}
                    className="h-32 p-2"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
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
