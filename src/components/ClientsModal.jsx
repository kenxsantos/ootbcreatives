import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
const ClientsModal = ({ isOpen, close, modalContent }) => {
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0  transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="overflow-visible relative transform rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="relative px-4 py-3">
              <IoIosClose
                size={24}
                className="absolute text-white hover:cursor-pointer top-0 right-0 -mr-8"
                onClick={close}
              />
            </div>
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                  <div className="mt-2">
                    <img
                      src={modalContent.logo}
                      alt={modalContent.brand}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default ClientsModal;
