import { IoAddOutline } from "react-icons/io5";
import FocusImg from "./assets/focus-img.svg";
import { FOCUS_RECORDS } from "./focrsRecords.constant";
import { GiConfirmed } from "react-icons/gi";

export const FocusRecords = () => {
  return (
    <>
      <div className="focus-records-header mt-14 px-5 w-full flex justify-between items-center">
        <p className="text-lg font-medium leading-6 text-[--text-gray]">
          Focus Record
        </p>
        <button className="p-1 hover:bg-[--light-white] rounded-[5px]">
          <IoAddOutline className="text-[--icon-color] opacity-60 h-5 w-5" />
        </button>
      </div>
      <div
        className={`flex flex-col flex-auto ${
          FOCUS_RECORDS.length
            ? "items-baseline justify-normal"
            : "items-center justify-center "
        } relative`}
      >
        {FOCUS_RECORDS.length ? (
          <div className="mt-4 pl-5 pr-3 w-full">
            <div className="w-full h-full">
              <p className="text-sm text-[--text-gray-4] pr-2">Sep 25</p>

              <ul className="m-0 p-0 mt-3 pr-2">
                {FOCUS_RECORDS.map((record, idx) => {
                  return (
                    <li
                      key={record.id}
                      className={`relative last:mb-1 ${
                        idx === 0 ? "mt-1" : "mt-4"
                      } ${record.task ? "min-h-[54px]" : "min-h-8"}`}
                    >
                      {idx !== FOCUS_RECORDS.length - 1 && (
                        <div className="straight-line absolute top-[28px] left-[11px] h-full border border-l-1 border-[--secondary-color] opacity-20"></div>
                      )}

                      <div
                        className={`relative ml-[30px] break-words ${
                          idx === 0 ? "mt-0" : "mt-[14px]"
                        }`}
                      >
                        <div
                          className={`absolute left-[-30px] top-[7px] w-[24px] h-[24px] bg-[#ECF1FE] rounded-full flex items-center justify-center`}
                        >
                          <GiConfirmed className="w-[18px] h-[18px] text-[--secondary-color]" />
                        </div>
                        {idx % 2 === 0 && (
                          <div className="dot absolute -left-[22px] top-10 w-2 h-2 border rounded-full bg-white border-[--secondary-color]"></div>
                        )}

                        <div className="focus-record-info p-1.5 hover:bg-[#F5F8FF] rounded-md">
                          <div className="w-full truncate text-[--text-gray-4] flex items-center justify-between">
                            <p className="text-xs leading-6">
                              {record.startedAt} - {record.endedAt}
                            </p>
                            <p className="text-xs leading-6">
                              {record.pomoDuration}m
                            </p>
                          </div>
                          {record?.task && (
                            <div className="relative">
                              <p className="pt-1 font-medium text-sm truncate text-[--text-gray] opacity-80">
                                {record.task.title}
                              </p>
                            </div>
                          )}
                          <div></div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <div className="absolute top-[22%] flex flex-col gap-5 items-center px-5">
            <img src={FocusImg} alt="focus-img" className="h-32" />
            <p className="text-xs text-[--text-gray-6]">No focus record yet</p>
          </div>
        )}
      </div>
    </>
  );
};
