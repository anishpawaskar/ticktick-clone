import { useState } from "react";
import { TASK_CONTROLS } from "../../taskControlPanel.constatns";
import { TaskControlListPresentation } from "./Presentation";

export const TaskControlList = ({ lists }) => {
  const [smartList, setSmartList] = useState(lists);
  const [selectedSmartListItem, setSelectedSmartListItem] = useState(2);

  const filteredSmartList = smartList.filter((item) => item.visibility);

  return (
    <TaskControlListPresentation
      lists={filteredSmartList}
      selectedSmartListItem={selectedSmartListItem}
      setSelectedSmartListItem={setSelectedSmartListItem}
      smartList={smartList}
      setSmartList={setSmartList}
    />
  );
};
