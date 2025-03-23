import React from "react";
import close from "../assets/icon/close.png";
import question from "../assets/icon/q.png";

// Define the props using an interface
interface ModalProps {
  isOpen: boolean;
  title: string;
  icon: string;
  closeModal: () => void;
  backToFirstModal?: () => void;
  children: React.ReactNode;
  bg?: string;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  title,
  icon,
  backToFirstModal,
  width,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div
        className={`flex flex-col rounded-xl bg-[#5860ff] border border-white/10 ${
          width ? "w-full" : "w-[95%]"
        } md:w-[400px]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <div
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer transition-colors"
            onClick={backToFirstModal ? backToFirstModal : undefined}
          >
            <img
              src={backToFirstModal ? icon : question}
              alt={backToFirstModal ? "back" : "question"}
              className="w-4"
            />
          </div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full cursor-pointer transition-colors"
            onClick={closeModal}
          >
            <img src={close} alt="close" className="w-3" />
          </div>
        </div>
        <div className="text-white">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
