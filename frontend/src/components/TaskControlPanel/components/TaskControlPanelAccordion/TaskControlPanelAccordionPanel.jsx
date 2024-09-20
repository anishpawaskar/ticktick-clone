import { useState } from "react";
import { TaskControlPanelAccordionListItem } from "./TaskControlPanelAccordionListItem";

export const TaskControlPanelAccordionPanel = ({
  lists,
  setLists,
  isAccordionOpen,
}) => {
  const [selectedListItem, setSelectedListItem] = useState(1);

  const filteredList = lists.filter(
    (item) => !item.isDelete && !item.isArchive
  );

  if (!lists.length) {
    return (
      <div
        className={`${
          isAccordionOpen ? "block" : "hidden"
        } bg-[--bg-gray-3] text-xs text-[--text-gray-4] rounded-md py-2 px-4`}
      >
        <p>Use lists to categorize and manage your tasks and notes</p>
      </div>
    );
  }
  return (
    <ul className={`${isAccordionOpen ? "block" : "hidden"}`}>
      {filteredList.map((item) => {
        return (
          <TaskControlPanelAccordionListItem
            key={item.id}
            item={item}
            lists={lists}
            setLists={setLists}
            selectedListItem={selectedListItem}
            setSelectedListItem={setSelectedListItem}
          />
        );
      })}
    </ul>
  );
};
