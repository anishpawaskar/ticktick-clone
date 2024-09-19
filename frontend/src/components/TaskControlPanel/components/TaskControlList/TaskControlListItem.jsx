import React, { useState } from "react";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiSunrise, FiInbox } from "react-icons/fi";
import { RiUserReceived2Fill } from "react-icons/ri";
import { MdOutlineSummarize } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export const TaskControlListItem = ({
  item,
  setSelectedSmartListItem,
  selectedSmartListItem,
  setSmartList,
  smartList,
}) => {
  const [isSmartListModalVisible, setIsSmartListModalVisible] = useState(false);
  const isSelected = item.id === selectedSmartListItem;

  let IconComponent;

  switch (item.name) {
    case "All": {
      IconComponent = <HiOutlineRectangleStack className="h-full w-full" />;
      break;
    }

    case "Today": {
      IconComponent = <IoCalendarClearOutline className="h-full w-full" />;
      break;
    }

    case "Tomorrow": {
      IconComponent = <FiSunrise className="h-full w-full" />;
      break;
    }

    case "Next 7 days": {
      IconComponent = <IoCalendarClearOutline className="h-full w-full" />;
      break;
    }

    case "Assigned to me": {
      IconComponent = <RiUserReceived2Fill className="h-full w-full" />;
      break;
    }

    case "Inbox": {
      IconComponent = <FiInbox className="h-full w-full" />;
      break;
    }

    case "Summary": {
      IconComponent = <MdOutlineSummarize className="h-full w-full" />;
      break;
    }

    default:
      IconComponent = null;
  }

  const handleSmartListSelect = (id) => {
    setSelectedSmartListItem(id);
  };

  const openSmartListModal = () => {
    setIsSmartListModalVisible(true);
  };

  const closeSmartListModal = () => {
    setIsSmartListModalVisible(false);
  };

  const handleSmartList = (item, action) => {
    if (action === "hide") {
      const updatedSmartList = smartList.map((list) =>
        list.id === item.id ? { ...list, visibility: null } : list
      );
      setSmartList(updatedSmartList);
    } else {
      if (!item.count) {
        const updatedSmartList = smartList.map((list) =>
          list.id === item.id ? { ...list, visibility: null } : list
        );
        setSmartList(updatedSmartList);
      }
    }
    setIsSmartListModalVisible(false);
  };

  return (
    <React.Fragment>
      <li
        key={item.id}
        data-smart-id={item.name}
        className="h-10 px-2.5 relative"
      >
        <button
          onClick={() => handleSmartListSelect(item.id)}
          className={`text-sm w-full h-full ${
            isSelected && "bg-[--light-white]"
          } rounded-md flex items-center group/smart-list-item px-3 hover:bg-[--light-white] relative`}
        >
          <span className="h-[18px] w-[18px] inline-block mr-2 text-[--text-gray-6] flex-shrink-0">
            {IconComponent}
          </span>
          <span className="flex flex-auto text-[--text-gray] truncate">
            {item.name}
          </span>
          {item.name === "Inbox" && (
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mx-2 flex-shrink-0"></span>
          )}
          <span className="relative min-w-6 text-[--text-gray-4] flex-shrink-0">
            <span className="text-xs group-hover/smart-list-item:invisible">
              {item.count && item.count}
            </span>
            <span
              role="button"
              onClick={openSmartListModal}
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover/smart-list-item:block"
            >
              <BsThreeDots className="w-4 h-4" />
            </span>
          </span>
        </button>
        {isSmartListModalVisible && (
          <div
            className={`absolute ${
              item.count ? "top-6" : "top-8"
            } z-50 right-[-150px] flex flex-col p-1 shadow-2xl rounded-[5px] min-w-44 text-sm bg-white`}
          >
            {!item.count ? (
              <button
                onClick={() => handleSmartList(item)}
                className="w-full h-9 rounded-[4px] hover:bg-[--light-white] flex justify-start items-center px-[10px]"
              >
                Show if not empty
              </button>
            ) : null}
            <button
              onClick={() => handleSmartList(item, "hide")}
              className="w-full h-9 rounded-[4px] hover:bg-[--light-white] flex justify-start items-center px-[10px]"
            >
              Hide
            </button>
          </div>
        )}
      </li>
      {isSmartListModalVisible && (
        <div
          onClick={closeSmartListModal}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
      )}
    </React.Fragment>
  );
};
