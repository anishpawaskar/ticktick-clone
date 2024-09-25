import { IoAddOutline } from "react-icons/io5";
import FocusImg from "./assets/focus-img.svg";

export const FocusRecords = () => {
  return (
    <>
      <div className="focus-records-header mt-14 px-5 w-full flex justify-between items-center">
        <p className="text-lg font-medium leading-6 text-[--text-gray]">
          Focus Record
        </p>
        <button className="p-1 hover:bg-[--light-white] rounded-[5px]">
          <IoAddOutline className="text-[--icon-color] opacity-60 h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-col flex-auto items-center justify-center px-5 relative">
        <div className="absolute top-[22%] flex flex-col gap-5 items-center">
          <img src={FocusImg} alt="focus-img" className="h-32" />
          <p className="text-xs text-[--text-gray-6]">No focus record yet</p>
        </div>
      </div>
    </>
  );
};
