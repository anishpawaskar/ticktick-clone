import { RxCross2 } from "react-icons/rx";

export const TaskAccordionActionPopup = ({ action, item, handlePopup }) => {
  let title;
  let content;
  let btnName;

  switch (action) {
    case "archive": {
      title = "Archive";
      content = `If archived, this list will be grouped into Folder “Archived Lists”. Tasks and notes within this list will not be reminded or displayed in "All" and other Smart Lists.`;
      btnName = "Archive";
      break;
    }

    case "delete": {
      title = `Delete list "${item.name}"?`;
      content = "All task in the list will be deleted.";
      btnName = "Delete";
      break;
    }

    case "duplicate": {
      title = "Duplicate list";
      content = "Please confirm the duplicate range";
      btnName = "Confirm";
      break;
      //TODO: add options to duplicate tasks
    }

    default: {
      title = "";
      content = "";
      btnName = "";
    }
    //TODO: add share and edit form
  }

  return (
    <>
      <div
        onClick={() => handlePopup("close")}
        className="absolute top-0 left-0 w-full h-full z-40"
      ></div>
      <div className="popup absolute top-[19%] left-[50%] z-50 translate-x-[-50%] px-5 shadow-2xl rounded-xl bg-[--primary-color] w-[440px] min-h-44 max-w-[96%] max-h-[460px] flex flex-col">
        <div className="popup-title flex justify-between min-h-14 items-center">
          <h2 className="text-lg font-semibold flex-auto truncate">{title}</h2>
          <button
            onClick={() => handlePopup("close", action)}
            className="h-[18px] w-[18px] text-[--icon-color] opacity-60"
          >
            <RxCross2 className="h-full w-full" />
          </button>
        </div>
        <div className="popup-content flex-auto pb-5">
          <p className="mb-3 mt-1 text-sm">{content}</p>
        </div>
        <div className="popup-action flex items-center justify-end gap-2 pb-4">
          <button
            onClick={() => handlePopup("close", action)}
            className="text-sm text-[--text-gray-6] px-[18px] py-[7px] h-8 flex items-center justify-center rounded-md min-w-[100px] border border-[#1919192e] hover:bg-[#F4F4F4] active:bg-[#E8E8E8] duration-200 ease-in transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => handlePopup("save", action)}
            className="text-sm text-[--primary-color] px-[18px] py-[7px] h-8 flex items-center justify-center rounded-md min-w-[100px] bg-[--secondary-color] hover:bg-[#6C8EFB] active:bg-[#3E60CD] duration-200 ease-in transition-colors"
          >
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};
