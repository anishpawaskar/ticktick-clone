import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineComputer } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { BsSortDown } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Modal } from "../../../Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, toggleModal } from "../../../Modal/modalSlice";
import {
  iconComponentList1,
  iconComponentList2,
  MODAL_LIST_1,
  MODAL_LIST_2,
} from "../../taskDashboard.constant";
import { selectTask, toggleControlPanel } from "../../../../store/taskSlice";

export const TaskDashboardHeader = ({ title }) => {
  const { activeModal } = useSelector(selectActiveModal);
  const { isControlPanelVisible } = useSelector(selectTask);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <button
          onClick={() => dispatch(toggleControlPanel(!isControlPanelVisible))}
          className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]"
        >
          <RxHamburgerMenu className="text-[--icon-color] w-[20px] h-[20px]" />
        </button>
        <input
          maxLength={64}
          className="h-8 text-xl font-medium p-1.5 flex items-center rounded hover:bg-[#F3F3F3]"
          defaultValue={title}
        />
      </div>
      <div className="flex items-center gap-1">
        <Modal>
          <div className="relative z-30">
            <button
              className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]"
              onClick={() => dispatch(toggleModal("sortby"))}
            >
              <TbArrowsSort className="text-[--icon-color] w-[20px] h-[20px]" />
            </button>
            {activeModal === "sortby" && (
              <ul className="max-h-72 bg-white shadow-2xl rounded-md absolute bottom-[-100px] right-[-10px] border border-[#191919] border-opacity-10 ">
                <li className="px-4 min-w-48 h-9 cursor-pointer flex items-center justify-between hover:bg-[#F3F3F3] m-1 rounded">
                  <div className="flex items-center gap-1">
                    <MdOutlineComputer className="text-[--icon-color] text-sm" />
                    <p className="text-xs text-[#191919]">Group by</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-[#191919]">Custom</p>
                    <IoIosArrowForward className="text-[--icon-color] text-sm" />
                  </div>
                </li>
                <li className="px-4 min-w-48 h-9 cursor-pointer flex items-center justify-between hover:bg-[#F3F3F3] m-1 rounded">
                  <div className="flex items-center gap-1">
                    <BsSortDown className="text-[--icon-color] text-sm" />
                    <p className="text-xs text-[#191919]">Sort by</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-[#191919]">Custom</p>
                    <IoIosArrowForward className="text-[--icon-color] text-sm" />
                  </div>
                </li>
              </ul>
            )}
          </div>
        </Modal>
        <Modal>
          <div className="relative z-30">
            <button
              onClick={() => dispatch(toggleModal("taskUtilModal"))}
              className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3] "
            >
              <HiOutlineDotsHorizontal className="text-[--icon-color] w-[20px] h-[20px]" />
              {activeModal === "taskUtilModal" && (
                <div className="bg-white w-[170px] shadow-2xl rounded-md absolute bottom-[-345px] right-[-10px] border border-[#191919] border-opacity-10">
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-xs text-[#191919] text-left">View</p>
                    <div className="flex justify-between">
                      <button className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]">
                        <FaListUl className="text-[--icon-color] text-sm" />
                      </button>
                      <button className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]">
                        <FaListUl className="text-[--icon-color] text-sm" />
                      </button>
                      <button className="h-8 w-7 flex items-center justify-center rounded hover:bg-[#F3F3F3]">
                        <FaListUl className="text-[--icon-color] text-sm" />
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul className="flex flex-col my-1">
                    {MODAL_LIST_1.map((item) => {
                      const IconComponent = iconComponentList1[item.icon];
                      return (
                        <li className="h-8 w-full px-1" key={item.id}>
                          <button className="w-full h-full hover:bg-[#F3F3F3] rounded-[5px] flex items-center justify-between text-sm px-2 py-4">
                            <span className="flex items-center gap-2 text-xs">
                              <IconComponent className="text-sm" />
                              {item.name}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <hr />
                  <ul className="flex flex-col my-1">
                    {MODAL_LIST_2.map((item) => {
                      const IconComponent = iconComponentList2[item.icon];
                      return (
                        <li className="h-8 w-full px-1" key={item.id}>
                          <button className="w-full h-full hover:bg-[#F3F3F3] rounded-[5px] flex items-center justify-between text-sm px-2 py-4">
                            <span className="flex items-center gap-2 text-xs">
                              <IconComponent className="text-sm" />
                              {item.name}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
