import { RoundedPopupCard } from "../RoundedPopupCard";

export const ArchiveForm = ({ isActive, handlePopupSave }) => {
  return (
    <RoundedPopupCard
      title={"Archive"}
      isActive={isActive}
      isSaveButtonDisable={false}
      handlePopupSave={handlePopupSave}
    >
      <p className="text-sm">
        If archived, this list will be grouped into Folder “Archived Lists”.
        Tasks and notes within this list will not be reminded or displayed in
        "All" and other Smart Lists.
      </p>
    </RoundedPopupCard>
  );
};
