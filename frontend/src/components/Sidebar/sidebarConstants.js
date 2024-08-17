import { MdCheckBox } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbClover } from "react-icons/tb";
import { ImRadioChecked } from "react-icons/im";
import { RiMapPinTimeFill } from "react-icons/ri";

export const USER_SELECTED_FEATURES = [
  {
    id: 1,
    name: "Task",
    isSelected: true,
    icon: "MdCheckBox",
  },
  {
    id: 2,
    name: "Calendar",
    isSelected: true,
    icon: "SlCalender",
  },
  {
    id: 3,
    name: "Eisenhower Matrix",
    isSelected: false,
    icon: "TbClover",
  },
  {
    id: 4,
    name: "Pomodoro",
    isSelected: false,
    icon: "ImRadioChecked",
  },
  {
    id: 5,
    name: "Habit Tracker",
    isSelected: false,
    icon: "RiMapPinTimeFill",
  },
];

export const iconsComponents = {
  MdCheckBox,
  SlCalender,
  TbClover,
  ImRadioChecked,
  RiMapPinTimeFill,
};
