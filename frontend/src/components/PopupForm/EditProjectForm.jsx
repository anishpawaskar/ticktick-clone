import { useEffect, useRef, useState } from "react";
import { RoundedPopupCard } from "../RoundedPopupCard";
import { ColorPicker } from "../ColorPicker";
import { GoQuestion } from "react-icons/go";
import { COLORS_DATA } from "../ColorPicker/colorPicker.constant";
import { editProject } from "../../store/slices/projectSlice";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../Modal/modalSlice";

export const EditProjectForm = ({ project, isActive }) => {
  const projectColor = COLORS_DATA.find(
    (color) => color.color === project.color
  );

  const [nameInput, setNameInput] = useState(project.name);
  const [selectedColor, setSelectedColor] = useState(projectColor.id);
  const [color, setColor] = useState(projectColor);

  const dispatch = useDispatch();

  const nameInputRef = useRef(null);
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleColorPick = (color) => {
    setSelectedColor(color.id);
    setColor(color);
  };

  const handlePopupSave = () => {
    const isInSmartList = checkboxRef.current.checked;

    if (nameInput) {
      const body = {
        name: nameInput,
        color: color.color,
        isInSmartList: !isInSmartList,
        //TODO: below things needs to be added from backend
        isPin: project.isPin,
        isArchive: project.isArchive,
      };

      dispatch(editProject({ projectId: project.id, body }));
      dispatch(closeEditModal());
    }
  };

  return (
    <RoundedPopupCard
      title={"Edit List"}
      type={"project"}
      isActive={isActive}
      isSaveButtonDisable={!nameInput.length ? true : false}
      handlePopupSave={handlePopupSave}
    >
      <input
        value={nameInput}
        ref={nameInputRef}
        onChange={(e) => setNameInput(e.target.value)}
        type="text"
        placeholder="Name"
        className="w-full h-8 px-3 border text-sm placeholder:text-sm rounded-md outline-none focus:border focus:border-[--secondary-color]"
      />
      <ColorPicker
        selectedColor={selectedColor}
        handleColorPick={handleColorPick}
      />
      <div className="flex items-center mt-3">
        <input
          ref={checkboxRef}
          type="checkbox"
          id="smartlist-checkbox"
          className="mr-2.5"
        />
        <label
          htmlFor="smartlist-checkbox"
          className="flex items-center text-[13px] leading-5 text-[--text-gray-6] relative"
        >
          <span className="mr-1.5">Do not show in smart list</span>
          <GoQuestion />
          <div
            //TODO: show msg on hovering over above question icon
            className="bg-[#2F2F2F] text-[--primary-color] p-1.5 w-52 rounded absolute top-6 left-[150px] hidden"
          >
            <p>
              If enabled, tasks within this list won't be shwo in "All",
              "Today", "Tomorrow", "Next 7 Days" or other smart lists. but you
              will still receive reminders.
            </p>
          </div>
        </label>
      </div>
    </RoundedPopupCard>
  );
};
