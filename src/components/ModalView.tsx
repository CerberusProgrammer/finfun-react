import { MdClose } from "react-icons/md";

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  closeModal: () => void;
  handleClick: () => void;
};

export default function ModalView({
  title,
  children,
  closeModal,
  handleClick,
}: Props) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg w-64 p-2">
        <div className="px-4 py-2 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="text-black close-modal rounded-full bg-green-100 p-2"
            onClick={closeModal}
          >
            <MdClose />
          </button>
        </div>
        <div className="p-4 space-y-4 flex flex-col">
          {children}
          <button
            className=" px-4 py-2 rounded-xl bg-green-200 font-bold text-lg opacity-70"
            onClick={handleClick}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
