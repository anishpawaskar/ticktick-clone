import { CustomAccordionPanelListItem } from "./CustomAccordionPanelListItem";

export const CustomAccordionPanel = ({
  isAccordionOpen,
  isListEmpty,
  children,
}) => {
  if (isListEmpty) {
    return (
      <div
        className={`${
          isAccordionOpen ? "block" : "hidden"
        } bg-[--bg-gray-3] text-[11px] text-[--text-gray-4] rounded-md py-2 px-3.5`}
      >
        <p>Use lists to categorize and manage your tasks and notes</p>
      </div>
    );
  }

  return (
    <ul className={`${isAccordionOpen ? "block" : "hidden"}`}>
      {/* {lists.map((listItem) => {
        return <CustomAccordionPanelListItem item={listItem} />;
      })} */}
      {children}
    </ul>
  );
};
