import { MdCheckBox } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbClover } from "react-icons/tb";
import { ImRadioChecked } from "react-icons/im";
import { RiMapPinTimeFill } from "react-icons/ri";

export const FEATURES_OPTIONS = [
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

export const DEFAULT_TODO_LIST = [
  {
    id: 1,
    name: "Work",
    isSelected: false,
    icon: "💼",
  },
  {
    id: 2,
    name: "Memo",
    isSelected: false,
    icon: "🏡",
  },
  {
    id: 3,
    name: "Shopping",
    isSelected: false,
    icon: "📦",
  },
  {
    id: 4,
    name: "Wishlist",
    isSelected: false,
    icon: "🦄",
  },
  {
    id: 5,
    name: "Study",
    isSelected: false,
    icon: "📚",
  },
  {
    id: 6,
    name: "Exercise",
    isSelected: false,
    icon: "🏃‍♂️",
  },
  {
    id: 7,
    name: "Birthday",
    isSelected: false,
    icon: "🎂",
  },
];

export const iconsComponents = {
  MdCheckBox,
  SlCalender,
  TbClover,
  ImRadioChecked,
  RiMapPinTimeFill,
};
