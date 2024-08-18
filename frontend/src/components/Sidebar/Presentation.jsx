import { ImUser } from "react-icons/im";
import { IoSync } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { iconsComponents, USER_SELECTED_FEATURES } from "./sidebarConstants";
import { Link } from "react-router-dom";

export const SidebarPresentation = () => {
  return (
    <div className="hidden xs:flex h-full w-[50px] flex-col items-center border-solid border-gray-50 bg-[#F9F9F9]">
      <div className="h-10 w-10 px-1 py-[3px] my-4 flex justify-center bg-[#F1F1F1] border rounded-md">
        <ImUser className="h-full text-2xl text-gray-400" />
      </div>
      <ul className="flex flex-col items-center flex-auto w-full">
        {USER_SELECTED_FEATURES.map((feature) => {
          const IconComponent = iconsComponents[feature.icon];
          return (
            <li
              className="h-10 w-10 px-1 py-[3px] relative group/item"
              key={feature.id}
            >
              <Link className="flex justify-center" to={"#"}>
                <IconComponent className="text-2xl text-[#9E9E9E] group-hover/item:text-[#727272]" />
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="w-full flex flex-col items-center mb-4">
        <li className="h-10 w-10 px-1 py-[3px] relative">
          <button className="flex justify-center w-full h-full">
            <IoSync className="text-2xl text-[#9E9E9E] hover:text-[#727272]" />
          </button>
        </li>
        <li className="h-10 w-10 px-1 py-[3px] relative">
          <button className="flex justify-center w-full h-full">
            <MdNotifications className="text-2xl text-[#9E9E9E] hover:text-[#727272]" />
          </button>
        </li>
        <li className="h-10 w-10 px-1 py-[3px] relative">
          <button className="flex justify-center w-full h-full">
            <HiQuestionMarkCircle className="text-2xl text-[#9E9E9E] hover:text-[#727272]" />
          </button>
        </li>
      </ul>
    </div>
  );
};
