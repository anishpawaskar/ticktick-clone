import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineInbox } from "react-icons/hi2";
import { MdCheckBox } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const TASK_CONTROLS = [
  {
    id: 1,
    name: "All",
    order: null,
    visibility: "show",
    category: "overview",
    count: 15,
  },
  {
    id: 2,
    name: "Today",
    order: null,
    visibility: "show",
    category: "overview",
    count: 3,
  },
  {
    id: 3,
    name: "Tomorrow",
    order: null,
    visibility: "show",
    category: "overview",
    count: 1,
  },
  {
    id: 4,
    name: "Next 7 days",
    order: null,
    visibility: "show",
    category: "overview",
    count: 2,
  },
  {
    id: 5,
    name: "Assigned to me",
    order: null,
    visibility: null,
    category: "overview",
    count: 4,
  },
  {
    id: 6,
    name: "Inbox",
    order: null,
    visibility: "show",
    category: "overview",
  },
  {
    id: 7,
    name: "Summary",
    order: null,
    visibility: "show",
    category: "overview",
  },
  {
    id: 4,
    name: "Filters",
    category: "filters",
    visibility: null,
  },
  {
    id: 5,
    name: "Tags",
    category: "filters",
    visibility: null,
  },
  {
    id: 6,
    name: "Completed",
    category: "status",
    count: 10,
    visibility: "show",
  },
  {
    id: 7,
    name: "Trash",
    category: "status",
    count: 100,
    visibility: "show",
  },
];

export const iconsComponentList = {
  CiCalendarDate,
  HiOutlineInbox,
  MdCheckBox,
  RiDeleteBin6Line,
};
