import { GoSun, GoTag } from "react-icons/go";
import { FiSunrise } from "react-icons/fi";
import { IoCalendarClearOutline, IoCalendarOutline } from "react-icons/io5";
import { TbFlag3Filled } from "react-icons/tb";
import { LuListTree } from "react-icons/lu";
import { BsFillPinFill, BsJournalBookmark } from "react-icons/bs";
import {
  MdCancelPresentation,
  MdDriveFileMoveOutline,
  MdOutlineCopyAll,
} from "react-icons/md";
import { PiLink } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const DATE_ACTIONS = [
  {
    id: 1,
    name: "Today",
    icon: GoSun,
  },
  {
    id: 2,
    name: "Tomorrow",
    icon: FiSunrise,
  },
  {
    id: 3,
    name: "Next Week",
    icon: IoCalendarClearOutline,
  },
  {
    id: 4,
    name: "Custom",
    icon: IoCalendarOutline,
  },
];

export const PRIORITY_ACTIONS = [
  {
    id: 1,
    level: "HIGH",
    icon: TbFlag3Filled,
    color: "#D52B24",
  },
  {
    id: 2,
    level: "MEDIUM",
    icon: TbFlag3Filled,
    color: "#FAA80C",
  },
  {
    id: 3,
    level: "LOW",
    icon: TbFlag3Filled,
    color: "#4772fa",
  },
  {
    id: 4,
    level: "NONE",
    icon: TbFlag3Filled,
    color: "#191919",
  },
];

export const TASK_PRIMARY_ACTIONS = [
  {
    id: 1,
    name: "Add Subtask",
    icon: LuListTree,
  },
  {
    id: 2,
    name: "Pin",
    icon: BsFillPinFill,
  },
  {
    id: 3,
    name: "Won't Do",
    icon: MdCancelPresentation,
  },
  {
    id: 4,
    name: "Move to",
    icon: MdDriveFileMoveOutline,
  },
  {
    id: 5,
    name: "Tags",
    icon: GoTag,
  },
];

export const TASK_SECONDARY_ACTIONS = [
  {
    id: 1,
    name: "Duplicate",
    icon: MdOutlineCopyAll,
  },
  {
    id: 2,
    name: "Copy Link",
    icon: PiLink,
  },
  {
    id: 3,
    name: "Convert to Note",
    icon: BsJournalBookmark,
  },
  {
    id: 4,
    name: "Delete",
    icon: RiDeleteBin6Line,
  },
];

export const LISTS_DATA = [
  {
    id: 1,
    name: "Not Smart",
    isPin: false,
    isArchive: false,
    isDelete: false,
    color: "#35D870",
    count: 7,
  },
  {
    id: 2,
    name: "todo",
    isPin: false,
    isArchive: false,
    isDelete: false,
    color: "",
  },
];
