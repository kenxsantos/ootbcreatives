import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { motion } from "framer-motion";

const CrewmatesModal = ({ isOpen, close, modalContent }) => {

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
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="overflow-hidden pt-12 relative transform rounded-lg bg-purple w-3/5 text-left transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="flex w-full gap-4 h-[600px] px-8">
              <div className="w-2/5">
                <div>
                  <button  
                    onClick={close} 
                    className="bg-orange-red font-jost text-white font-bold py-2 px-10 rounded-full">BACK</button>
                </div>
                <div  className="mt-12">
                  <img 
                  src={modalContent.astronaut}
                    // src="/assets/astronauts/RafaelTimothyEstrella.webp" 
                    alt={modalContent.title}
                    className="bg-cover w-full"/>
                </div>
              </div>
              <div className="w-3/5 bg-white rounded-t-[60px] pt-10 px-8 overflow-y-auto  hide-scrollbar">
                <div>
                  <h1 className="font-jost font-bold text-black text-5xl">{modalContent.name}</h1>
                  <h5 className="text-gray-700 font-jost text-2xl uppercase">{modalContent.position}</h5>
                </div>
                <div>
                {modalContent.description &&
                  Object.values(modalContent.description).map((desc, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 1.2, duration: 0.5 },
                      }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
                      className="font-jost mt-4 text-lg text-black"
                    >
                      {desc}
                    </motion.p>
                  ))}
                </div>
                </div>
            </div>
          </DialogPanel>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default CrewmatesModal;
