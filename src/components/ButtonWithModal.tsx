import { useState } from "react";
import ModalView from "./ModalView";

type Props = {
  title: string;
  onClick: () => void;
  children: JSX.Element | JSX.Element[];
};

export default function ButtonWithModal({ title, onClick, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    closeModal();
    onClick();
  };

  return (
    <>
      <button
        className="w-full h-full px-3 py-3 rounded-3xl shadow-sm bg-green-200 "
        onClick={openModal}
      >
        <p className="font-bold text-xl opacity-70">{title}</p>
      </button>

      {isOpen && (
        <ModalView
          title={title}
          closeModal={closeModal}
          handleClick={handleClick}
        >
          {children}
        </ModalView>
      )}
    </>
  );
}
