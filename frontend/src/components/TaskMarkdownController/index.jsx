import { RxCross2 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { PiLineVerticalBold } from "react-icons/pi";
import { VscCalendar } from "react-icons/vsc";
import { RiFlag2Line } from "react-icons/ri";
import { MdCheck } from "react-icons/md";
import { TaskMarkdownEditor } from "../TaskMarkdownEditor";
import { TaskMarkdownPreview } from "../TaskMarkdownPreview";
import {
  priorityIcons,
  TASK_PRIORITY,
} from "../TaskDashboard/components/TaskForm/taskForm.constant";
import { Modal } from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveModal, toggleModal } from "../Modal/modalSlice";
import { getSelectedTask, selectTask } from "../../store/taskSlice";
import { useState } from "react";
import { DatePicker } from "../DatePicker";

export const TaskMarkdownController = () => {
  const [isEditMode, setIsEditMode] = useState(true);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const { activeModal } = useSelector(selectActiveModal);
  const { selectedTask } = useSelector(selectTask);
  const dispatch = useDispatch();

  const currentPriority = "None";

  // FIX: height of a TaskMarkdownController for xs-[screen] it should grow upto 700px and initially it should be 350px

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col z-50 bg-white ${
        selectedTask !== "" ? "xs:flex" : "hidden"
      } xs:h-[350px] xs:max-h-[700px] xs:overflow-auto xs:transition-all xs:w-[350px] xs:shadow-2xl xs:rounded-md xs:top-[155px] xs:absolute sm:w-[500px] lg:block lg:static lg:max-h-full lg:h-full lg:w-[30%] lg:shadow-none`}
    >
      <div className="pt-5 px-4 pb-4 border-b  flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(getSelectedTask(""))}
            className="xs:hidden"
          >
            <RxCross2 className="text-[--icon-color] h-5 w-5" />
          </button>
          {isEditMode ? (
            <button onClick={() => setIsEditMode(false)}>
              <FaRegEdit className="text-[--icon-color] h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setIsEditMode(true)}>
              <VscPreview className="text-[--icon-color] h-5 w-5" />
            </button>
          )}
        </div>
        <div className="flex flex-auto items-center">
          <div className="flex items-center flex-auto gap-[2px]">
            <input type="checkbox" name="complete-task" className="w-4 h-4" />
            <PiLineVerticalBold className="text-[--icon-color]" />
            <div className="relative">
              <button
                onClick={() => setIsDatePickerVisible(true)}
                className="mb-[1px] flex gap-1"
              >
                <VscCalendar className="text-[#4772fa] h-[18px] w-[18px]" />
                <p className="text-[#4772fa] text-[13px] truncate">
                  a month later, Sep 27
                </p>
              </button>
              {isDatePickerVisible && (
                <div className="absolute z-[150] left-[-4px] top-[25px]">
                  <DatePicker />
                </div>
              )}
            </div>
            {isDatePickerVisible && (
              <div
                onClick={() => setIsDatePickerVisible(false)}
                className="w-full h-full absolute top-0 left-0 z-10"
              ></div>
            )}
          </div>
          <Modal>
            <div className="flex items-center relative">
              <button onClick={() => dispatch(toggleModal("priority"))}>
                <RiFlag2Line className="text-[--icon-color] w-5 h-5" />
              </button>

              {activeModal === "priority" && (
                <div className="absolute top-[30px] left-[-138px] z-[200] shadow-2xl border rounded-md bg-white p-1 w-40">
                  {TASK_PRIORITY.map((item) => {
                    const IconComponent = priorityIcons[item.icon];

                    return (
                      <button
                        className="flex items-center justify-between h-8 px-2 w-full rounded hover:bg-[#F3F3F3] text-[13px]"
                        key={item.id}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent
                            style={{ color: item.color }}
                            className="w-5 h-5"
                          />
                          <span
                            style={{
                              color:
                                currentPriority === item.name
                                  ? "#4772fa"
                                  : "#000",
                            }}
                            className="flex flex-auto"
                          >
                            {item.name}
                          </span>
                        </div>
                        {currentPriority === item.name && (
                          <MdCheck className="h-4 w-4 text-[#4772fa]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </Modal>
        </div>
      </div>
      {isEditMode ? <TaskMarkdownEditor /> : <TaskMarkdownPreview />}
    </div>
  );
};
