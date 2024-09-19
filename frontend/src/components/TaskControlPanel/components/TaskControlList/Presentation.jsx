import { TaskControlListItem } from "./TaskControlListItem";

export const TaskControlListPresentation = ({
  lists,
  selectedSmartListItem,
  setSelectedSmartListItem,
  smartList,
  setSmartList,
}) => {
  return (
    <section className="my-4">
      <ul className="flex flex-col">
        {lists.map((item) => {
          return (
            <TaskControlListItem
              key={item.id}
              item={item}
              selectedSmartListItem={selectedSmartListItem}
              setSelectedSmartListItem={setSelectedSmartListItem}
              smartList={smartList}
              setSmartList={setSmartList}
            />
          );
        })}
      </ul>
    </section>
  );
};
