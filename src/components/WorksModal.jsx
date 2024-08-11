import React from "react";

const WorkModal = ({ isOpen, close, modalContent }) => {
  return (
    <div
      open={isOpen}
      onClose={close}
      animate={{ scale: [0, 1, 0.5, 1] }}
      transition={{ times: [0, 0.1, 0.9, 1] }}
    >
      <div className="w-[650px] h-[500px]  rounded-3xl bg-[#FEA63D] p-4">
        <div className="w-4/5 h-full bg-[#F99A51] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default WorkModal;
