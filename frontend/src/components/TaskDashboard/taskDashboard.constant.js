import { BsCheck2Square, BsFillShareFill } from "react-icons/bs";
import { PiClockCountdownLight, PiPrinter } from "react-icons/pi";
import { CgDetailsMore } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { GoGraph } from "react-icons/go";

export const MODAL_LIST_1 = [
  {
    id: 1,
    name: "Hide Completed",
    icon: "BsCheck2Square",
  },
  {
    id: 2,
    name: "Show Details",
    icon: "CgDetailsMore",
  },
  {
    id: 3,
    name: "Show Countdown",
    icon: "PiClockCountdownLight",
  },
];

export const MODAL_LIST_2 = [
  {
    id: 1,
    name: "Add Section",
    icon: "IoIosAdd",
  },
  {
    id: 2,
    name: "Share",
    icon: "BsFillShareFill",
  },
  {
    id: 3,
    name: "List Activities",
    icon: "GoGraph",
  },
  {
    id: 4,
    name: "Print",
    icon: "PiPrinter",
  },
];

export const iconComponentList1 = {
  BsCheck2Square,
  PiClockCountdownLight,
  CgDetailsMore,
};

export const iconComponentList2 = {
  BsFillShareFill,
  PiPrinter,
  GoGraph,
  IoIosAdd,
};
