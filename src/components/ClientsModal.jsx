import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
const ClientsModal = ({ isOpen, close, modalContent }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
      animate={{ scale: [0, 1, 0.5, 1] }}
      transition={{ times: [0, 0.1, 0.9, 1] }}
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.1, 0.1, 1.0],
        }}
        className="fixed inset-0 z-10 w-screen overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="overflow-visible py-12 relative transform rounded-lg bg-transparent w-[800px] bg-opacity-95 text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="relative py-3">
              <IoIosClose
                size={24}
                className="absolute text-white rounded-full  hover:cursor-pointer top-0 right-0"
                onClick={close}
              />
            </div>
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start items-center justify-center">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                  <div className="mt-2">
                    <img
                      src={modalContent.poster}
                      alt={modalContent.brand}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default ClientsModal;
