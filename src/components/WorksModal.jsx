import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Mousewheel, Pagination } from "swiper/modules";

const WorksModal = ({ isOpen, close, modalContent }) => {
  return (
    <Dialog open={isOpen} onClose={close} className="relative z-50">
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
        <div className="flex min-h-full items-center justify-start text-center">
          <DialogPanel
            transition
            className="relative transform rounded-3xl bg-[#FEA63D] p-4 w-[550px] h-full shadow-2xl transition-all mt-32 ml-16 data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="relative justify-end flex">
              <IoIosClose
                size={24}
                className="text-white hover:cursor-pointer"
                onClick={close}
              />
            </div>
            <div className="w-full flex gap-2">
              <div className="w-3/4">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  mousewheel={true}
                  loop={true}
                  pagination={{ clickable: true }}
                  modules={[Mousewheel, Pagination]}
                >
                  {modalContent?.images &&
                    Object.values(modalContent.images).map((img, index) => (
                      <SwiperSlide
                        key={index}
                        className="w-[250px] h-[350px] rounded-2xl"
                      >
                        <img
                          src={img}
                          alt={`Slide ${index}`}
                          className="rounded-2xl w-full h-full"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="w-1/4">
                <h2 className="text-white font-bold text-lg">
                  {modalContent.client}
                </h2>
                <h3 className="text-white text-sm">{modalContent.project}</h3>
                <p className="text-white text-xs mt-2">
                  {modalContent.description}
                </p>
              </div>
            </div>
          </DialogPanel>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default WorksModal;
