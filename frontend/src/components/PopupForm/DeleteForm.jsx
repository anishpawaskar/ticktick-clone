import { RoundedPopupCard } from "../RoundedPopupCard";

export const DeleteForm = ({ isActive, item, handlePopupSave }) => {
  const deleteTitle = (
    <p className="flex mr-2 text-sm text-[--text-gray]">
      Delete list "<span className="truncate">{item.name}</span>" ?
    </p>
  );

  return (
    <RoundedPopupCard
      title={deleteTitle}
      isActive={isActive}
      isSaveButtonDisable={false}
      handlePopupSave={handlePopupSave}
    >
      <p className="text-sm text-[--text-gray]">
        All tasks in the list will be deleted.
      </p>
    </RoundedPopupCard>
  );
};
