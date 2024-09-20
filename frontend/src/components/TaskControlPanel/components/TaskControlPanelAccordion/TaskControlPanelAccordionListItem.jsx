import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { LISTS_MODAL_ACTIONS } from "../../taskControlPanel.constatns";
import { TaskAccordionActionPopup } from "./TaskAccordionActionsPopup";

export const TaskControlPanelAccordionListItem = ({
  item,
  lists,
  setLists,
  selectedListItem,
  setSelectedListItem,
}) => {
  const [isAccordionListItemModalVisible, setIsAccordionListItemModalVisible] =
    useState(false);
  const [isPopupVisible, setIsPopupVisisble] = useState(false);
  const [action, setAction] = useState("");

  const isSelected = selectedListItem === item.id;

  const handleListItemSelect = (id) => {
    setSelectedListItem(id);
  };

  const openListItemModal = (e) => {
    e.stopPropagation();
    setIsAccordionListItemModalVisible(true);
  };

  const closeListItemModal = () => {
    setIsAccordionListItemModalVisible(false);
  };

  const handlePopup = (popupAction, action) => {
    if (popupAction === "close") {
      setIsPopupVisisble(false);
      return;
    }

    switch (action) {
      case "archive": {
        console.log("coming here");
        const updatedList = lists.map((listItem) =>
          listItem.id === item.id ? { ...listItem, isArchive: true } : listItem
        );
        setAction("");
        console.log("updated", updatedList);
        setLists(updatedList);
        setIsPopupVisisble(false);
        break;
      }

      case "delete": {
        const updatedList = lists.map((listItem) =>
          listItem.id === item.id ? { ...listItem, isDelete: true } : listItem
        );
        setAction("");
        setLists(updatedList);
        setIsPopupVisisble(false);
        break;
      }
    }
  };

  return (
    <React.Fragment>
      <li key={item.id} className="h-10 w-full relative">
        <button
          onClick={() => handleListItemSelect(item.id)}
          className={`h-full w-full rounded-md ${
            isSelected && "bg-[--light-white]"
          } flex items-center hover:bg-[--light-white] pl-4 pr-3 text-sm group/accordion-list-item`}
        >
          <span className="h-[18px] w-[18px] mr-2 text-[--text-gray-6] truncate flex-shrink-0">
            <RxHamburgerMenu className="w-full h-full" />
          </span>
          <span className="flex flex-auto text-[--text-gray] truncate">
            {item.name}
          </span>
          {item.color && (
            <span
              style={{ background: item.color }}
              className="inline-block w-2 h-2 rounded-full ml-[2px] mr-1 flex-shrink-0"
            ></span>
          )}
          <span className="relative min-w-6 text-[--text-gray-4] flex-shrink-0">
            <span className="text-xs group-hover/accordion-list-item:invisible absolute top-[50%] translate-y-[-50%] right-0">
              {item.count && item.count}
            </span>
            <span
              onClick={openListItemModal}
              role="button"
              className="absolute top-[50%] right-0 hidden translate-y-[-50%] group-hover/accordion-list-item:block z-10"
            >
              <BsThreeDots className="w-4 h-4" />
            </span>
          </span>
        </button>
        {isAccordionListItemModalVisible && (
          <div className="absolute z-20 top-7 right-[-160px] flex flex-col p-1 shadow-2xl rounded-[5px] min-w-44 text-sm bg-white">
            {LISTS_MODAL_ACTIONS.map((action) => {
              const handleActions = (item, action) => {
                switch (action) {
                  case "edit": {
                    console.log("open edit modal"); //TODO: edit list item form
                    setAction(action);
                    break;
                  }

                  case "pin": {
                    const updatedList = lists.map((listItem) =>
                      listItem.id === item.id
                        ? { ...listItem, isPin: true }
                        : { listItem }
                    );
                    setAction(action);
                    setLists(updatedList);
                    break;
                  }

                  case "duplicate": {
                    console.log(
                      "create same list item with same name and everything only id will change"
                    );
                    setAction(action);
                    break;
                  }

                  case "share": {
                    console.log("share link");
                    setAction(action);
                    break;
                  }

                  case "archive": {
                    setAction(action);
                    setIsPopupVisisble(true);
                    break;
                  }

                  case "delete": {
                    setAction(action);
                    setIsPopupVisisble(true);
                    break;
                  }
                }
                setIsAccordionListItemModalVisible(false);
              };

              return (
                <button
                  onClick={() => handleActions(item, action.action)}
                  key={action.id}
                  className="w-full h-9 rounded-[4px] hover:bg-[--light-white] flex justify-start items-center px-[10px]"
                >
                  {action.name}
                </button>
              );
            })}
          </div>
        )}
      </li>
      {isAccordionListItemModalVisible && (
        <div
          onClick={closeListItemModal}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
      )}
      {isPopupVisible && (
        <TaskAccordionActionPopup
          action={action}
          item={item}
          handlePopup={handlePopup}
        />
      )}
    </React.Fragment>
  );
};
