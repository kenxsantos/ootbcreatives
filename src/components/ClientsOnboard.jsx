import React from "react";
import clients from "../json/clients.json";
import { useState } from "react";
import ClientsModal from "./ClientsModal";
const ClientsOnboard = () => {
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
      <div className="font-jost text-white text-base">CLIENTS ONBOARD</div>
      <div className="w-full mt-4">
        {clients.map((client, index) => (
          <div key={index} className="flex gap-4">
            {Object.keys(client.clientsOnboard).map((key, idx) => {
              if (key !== "id") {
                const clientsOnboardItem = client.clientsOnboard[key];
                return (
                  <div
                    className="w-[270px] h-36 rounded-2xl bg-white shadow-inner-clients p-8 flex items-center hover:cursor-pointer"
                    key={idx}
                    onClick={() => openModal(clientsOnboardItem)}
                  >
                    {clientsOnboardItem.logo && (
                      <img
                        src={clientsOnboardItem.logo}
                        alt={clientsOnboardItem.brand}
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

export default ClientsOnboard;
