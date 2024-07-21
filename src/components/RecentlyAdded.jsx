import React from "react";
import clients from "../json/clients.json";
import ClientsModal from "./ClientsModal";
import { useState } from "react";
const RecentlyAdded = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (item) => {
    setModalContent(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="font-jost text-white text-base">RECENTLY ADDED</div>
      <div className="w-full mt-4">
        {clients.map((client, index) => (
          <div key={index} className="flex gap-4">
            {Object.keys(client.recently).map((key, idx) => {
              if (key !== "id") {
                const recentItem = client.recently[key];
                return (
                  <div
                    className="relative w-[270px] h-36 rounded-2xl bg-white shadow-inner-clients p-4 flex items-center hover:cursor-pointer"
                    key={idx}
                    onClick={() => openModal(recentItem)}
                  >
                    <div className="bg-orange bg-[#F38920] rounded-full bottom-0 absolute w-full -ml-4 border-4 border-[#F38920] -mb-2 text-center text-white font-jost text-sm">
                      RECENTLY ADDED
                    </div>
                    {recentItem.logo && (
                      <img
                        src={recentItem.logo}
                        alt={recentItem.brand}
                        className="w-full"
                      />
                    )}
                  </div>
                );
              }
            })}
          </div>
        ))}
      </div>
      <ClientsModal
        isOpen={isOpen}
        close={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default RecentlyAdded;
