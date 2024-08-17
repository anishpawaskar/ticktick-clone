import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineInbox } from "react-icons/hi2";
import { MdCheckBox } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const TASK_CONTROLS = [
  {
    id: 1,
    name: "Today",
    icon: "CiCalendarDate",
    category: "overview",
    count: 2,
  },
  {
    id: 2,
    name: "Next 7 days",
    icon: "CiCalendarDate",
    category: "overview",
    count: 4,
  },
  {
    id: 3,
    name: "Inbox",
    icon: "HiOutlineInbox",
    category: "overview",
  },
  {
    id: 4,
    name: "Filters",
    icon: "",
    category: "filters",
  },
  {
    id: 5,
    name: "Tags",
    icon: "",
    category: "filters",
  },
  {
    id: 6,
    name: "Completed",
    icon: "MdCheckBox",
    category: "status",
    count: 10,
  },
  {
    id: 7,
    name: "Trash",
    icon: "RiDeleteBin6Line",
    category: "status",
    count: 100,
  },
];

export const iconsComponentList = {
  CiCalendarDate,
  HiOutlineInbox,
  MdCheckBox,
  RiDeleteBin6Line,
};
