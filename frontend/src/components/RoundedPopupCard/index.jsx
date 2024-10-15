import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { closeEditModal, closeModal } from "../Modal/modalSlice";

export const RoundedPopupCard = ({
  title,
  type,
  isActive,
  isSaveButtonDisable,
  handlePopupSave,
  children,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`absolute top-[20%] left-1/2 -translate-x-1/2 z-[110] bg-white rounded-xl border min-h-[180px] shadow-2xl flex flex-col ${
          type === "tag" ? "w-[90%] xs:w-[380px]" : "w-[90%] sm:w-[440px]"
        }`}
      >
        <div className="popup-header flex items-center px-5 min-h-14">
          {typeof title === "string" ? (
            <h3 className="flex-[auto] truncate text-base text-[--text-gray] font-bold leading-[1.3]">
              {title}
            </h3>
          ) : (
            <h3 className="leading-tight flex-[auto] truncate">{title}</h3>
          )}

          <button
            onClick={() => {
              if (title.toLowerCase().includes("edit")) {
                dispatch(closeEditModal());
              } else {
                dispatch(closeModal());
              }
            }}
          >
            <RxCross2 className="h-[18px] w-[18px] text-[--icon-color] leading-[16px] opacity-60" />
          </button>
        </div>
        <div
          className={`popup-body px-5 flex-auto ${
            type === "tag" ? "pb-[50px]" : "pb-5"
          }`}
        >
          {children}
        </div>
        <div className="popup-footer flex items-center justify-end pt-3 px-5 pb-4">
          <button
            onClick={() => {
              if (title.toLowerCase().includes("edit")) {
                dispatch(closeEditModal());
              } else {
                dispatch(closeModal());
              }
            }}
            className="leading-none text-[14px] h-[30px] min-w-[100px] py-1.5 rounded-md border text-[--text-gray-6] bg-transparent hover:bg-[--light-white] active:bg-[#E8E8E8] transition-colors duration-200 ease-in mr-3"
          >
            Close
          </button>
          <button
            disabled={isSaveButtonDisable}
            onClick={() => handlePopupSave()}
            className="leading-none text-[14px] h-[30px] min-w-[100px] py-1.5 rounded-md border text-[--primary-color] bg-[--secondary-color] disabled:bg-[#B5C7FD] disabled:cursor-not-allowed hover:bg-[#6C8EFB] active:bg-[#3E60CD] transition-colors duration-200 ease-in"
          >
            Save
          </button>
        </div>
      </div>
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-full z-[100]"></div>
      )}
    </>
  );
};
