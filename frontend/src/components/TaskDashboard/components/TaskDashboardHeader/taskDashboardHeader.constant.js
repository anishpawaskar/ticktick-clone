import { MdOutlineComputer } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import { IoMdList } from "react-icons/io";
import { BsCheck2Square } from "react-icons/bs";
import { TbListDetails, TbGraph } from "react-icons/tb";
import { PiClockCountdown } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { GoShare } from "react-icons/go";
import { RiPrinterLine } from "react-icons/ri";

export const SORT_DATA = [
  {
    id: 10,
    title: "Group by",
    icon: MdOutlineComputer,
    items: [
      {
        id: 1,
        name: "Custom",
      },
      {
        id: 2,
        name: "Date",
      },
      {
        id: 3,
        name: "Tag",
      },
      {
        id: 4,
        name: "Priority",
      },
      {
        id: 5,
        name: "None",
      },
    ],
  },
  {
    id: 20,
    title: "Sort by",
    icon: BsSortDown,
    items: [
      {
        id: 1,
        name: "Custom",
      },
      {
        id: 2,
        name: "Date",
      },
      {
        id: 3,
        name: "Title",
      },
      {
        id: 4,
        name: "Tag",
      },
      {
        id: 5,
        name: "Priority",
      },
    ],
  },
];

export const MENU_DATA = [
  {
    id: 100,
    name: "View",
    items: [
      {
        id: 1,
        icon: IoMdList,
      },
      {
        id: 2,
        icon: IoMdList,
      },
      {
        id: 3,
        icon: IoMdList,
      },
    ],
  },
  {
    id: 200,
    items: [
      {
        id: 4,
        name: "Hide Complete",
        icon: BsCheck2Square,
      },
      {
        id: 5,
        name: "Show Details",
        icon: TbListDetails,
      },
      {
        id: 6,
        name: "Show Countdown",
        icon: PiClockCountdown,
      },
    ],
  },
  {
    id: 300,
    items: [
      {
        id: 7,
        name: "Add section",
        icon: IoAddOutline,
      },
      {
        id: 8,
        name: "Share",
        icon: GoShare,
      },
      {
        id: 9,
        name: "List Activities",
        icon: TbGraph,
      },
      {
        id: 10,
        name: "Print",
        icon: RiPrinterLine,
        //TODO: show extra menu item on hover and find out what that component name
      },
    ],
  },
];
