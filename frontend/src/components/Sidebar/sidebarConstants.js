import { FaCheckSquare } from "react-icons/fa";
import { IoCalendar, IoSearchOutline } from "react-icons/io5";
import { RiRefreshLine } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";
import { BsQuestionCircleFill } from "react-icons/bs";

export const USER_FEATURES = [
  {
    id: 1,
    name: "Task",
    icon: FaCheckSquare,
    isSelected: true,
  },
  {
    id: 2,
    name: "Calendar",
    icon: IoCalendar,
    isSelected: false,
  },
  {
    id: 3,
    name: "Search",
    icon: IoSearchOutline,
  },
];

export const APP_FEATURES = [
  {
    id: 1,
    name: "Refresh",
    icon: RiRefreshLine,
  },
  {
    id: 2,
    name: "Notification",
    icon: GoBellFill,
  },
  {
    id: 3,
    name: "More",
    icon: BsQuestionCircleFill,
  },
];
