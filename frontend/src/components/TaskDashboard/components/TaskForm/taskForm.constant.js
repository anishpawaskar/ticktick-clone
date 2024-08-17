import { GoTag } from "react-icons/go";
import { ImAttachment } from "react-icons/im";
import { RiTextBlock } from "react-icons/ri";
import { RiFlag2Line } from "react-icons/ri";
import { TbFlag3Filled } from "react-icons/tb";

export const TASK_FORM_FILTERS = [
  {
    id: 1,
    name: "Tags",
    icon: "GoTag",
  },
  {
    id: 2,
    name: "Attachment",
    icon: "ImAttachment",
  },
  {
    id: 3,
    name: "Add from Template",
    icon: "RiTextBlock",
  },
];

export const iconsForTaskFormFilters = {
  GoTag,
  ImAttachment,
  RiTextBlock,
};

export const TASK_PRIORITY = [
  {
    id: 1,
    name: "High",
    level: 5,
    icon: "TbFlag3Filled",
    color: "#D52B24",
  },
  {
    id: 2,
    name: "Medium",
    level: 4,
    icon: "TbFlag3Filled",
    color: "#FAA80C",
  },
  {
    id: 3,
    name: "Low",
    level: 2,
    icon: "TbFlag3Filled",
    color: "#4772FA",
  },
  {
    id: 4,
    name: "None",
    level: 0,
    icon: "RiFlag2Line",
    color: "#8f8f8f",
  },
];

export const priorityIcons = {
  TbFlag3Filled,
  RiFlag2Line,
};
