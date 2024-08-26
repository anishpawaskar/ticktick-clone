import { GoSun } from "react-icons/go";
import { FiSunrise, FiMoon } from "react-icons/fi";
import { IoCalendarClearOutline } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoAlarmOutline } from "react-icons/io5";
import { BsRepeat } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { MONTHS, WEEKS } from "./datePicker.constant";
import { useEffect, useState } from "react";
import {
  formatDateInUTC,
  getDates,
  getMonth,
  getMonthStr,
  getNextMonth,
  getPreviousMonth,
  getSelectedDay,
  getYear,
  setNextMonthDate,
  setNextWeekDate,
  setTomorrowsDate,
} from "./helper";

const arr2 = [1, 2, 3, 4];
const selectedMonth = "Aug";
const DUE_DATE = "2024-08-23T00:00:00+0000";

export const DatePicker = () => {
  const [isSelectingMonth, setIsSelectingMonth] = useState(false);
  const [date, setDate] = useState({
    cureentDate: null,
    month: 0,
    year: 0,
  });

  useEffect(() => {
    setDate({
      cureentDate: new Date(DUE_DATE),
      month: getMonth(DUE_DATE),
      year: getYear(DUE_DATE),
    });
  }, []);

  const handlePrevMonth = () => {
    const { prevMonth, prevYear } = getPreviousMonth(date.month, date.year);
    setDate({
      cureentDate: date.cureentDate,
      month: prevMonth,
      year: prevYear,
    });
  };

  const goToSelectedDate = () => {
    const month = getMonth(date.cureentDate);
    const year = getYear(date.cureentDate);

    setDate({
      cureentDate: date.cureentDate,
      month,
      year,
    });
  };

  const handleNextMonth = () => {
    const month = date.month === 12 ? 0 : date.month;
    const { nextMonth, nextYear } = getNextMonth(month, date.year);
    setDate({
      cureentDate: date.cureentDate,
      month: nextMonth,
      year: nextYear,
    });
  };

  const selectQuickDate = (dateRange) => {
    switch (dateRange) {
      case "TODAY": {
        const date = formatDateInUTC(new Date());
        const month = getMonth(date);
        const year = getYear(date);

        setDate({
          cureentDate: date,
          month,
          year,
        });

        // TODO: close modal after that
        break;
      }

      case "TOMORROW": {
        const tomorrowDate = setTomorrowsDate(new Date(date.cureentDate));
        const month = getMonth(tomorrowDate);
        const year = getYear(tomorrowDate);

        setDate({
          cureentDate: tomorrowDate,
          month,
          year,
        });

        break;
      }

      case "NEXT-WEEK": {
        const nextWeekDate = setNextWeekDate(new Date(date.cureentDate));
        const month = getMonth(nextWeekDate);
        const year = getYear(nextWeekDate);

        setDate({
          cureentDate: nextWeekDate,
          month,
          year,
        });

        break;
      }

      case "NEXT-MONTH": {
        const nextMonthDate = setNextMonthDate();
        const month = getMonth(nextMonthDate);
        const year = getYear(nextMonthDate);

        setDate({
          cureentDate: nextMonthDate,
          month,
          year,
        });
      }
    }
  };

  return (
    <div className="bg-white shadow-2xl border py-4 w-[260px] rounded-lg flex flex-col gap-4">
      <div className="flex items-center bg-[#F3F3F3] h-[30px] p-[2px] rounded-md mx-4">
        <button className="flex flex-auto justify-center items-center text-[13px] bg-white h-full rounded-md">
          Date
        </button>
        <button className="flex flex-auto justify-center items-center text-[13px] h-fulll rounded-md">
          Duration
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <ul className="flex items-center justify-between px-1 py-3 text-[rgba(25,25,25,0.6)] mx-4">
          <button
            onClick={() => selectQuickDate("TODAY")}
            className="hover:bg-[#F3F3F3] h-8 w-8 flex items-center justify-center rounded-md"
          >
            <GoSun className="h-6 w-6" />
          </button>
          <button
            onClick={() => selectQuickDate("TOMORROW")}
            className="hover:bg-[#F3F3F3] h-8 w-8 flex items-center justify-center rounded-md"
          >
            <FiSunrise className="h-6 w-6" />
          </button>
          <button
            onClick={() => selectQuickDate("NEXT-WEEK")}
            className="hover:bg-[#F3F3F3] h-8 w-8 flex items-center justify-center rounded-md"
          >
            <IoCalendarClearOutline className="h-6 w-6" />
          </button>
          <button
            onClick={() => selectQuickDate("NEXT-MONTH")}
            className="hover:bg-[#F3F3F3] h-8 w-8 flex items-center justify-center rounded-md"
          >
            <FiMoon className="h-6 w-6" />
          </button>
        </ul>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-[rgba(25,25,25,0.8)] ml-4 mr-[10px]">
            <button
              onClick={() => setIsSelectingMonth(true)}
              className="text-sm"
            >
              {isSelectingMonth
                ? date.year
                : `${getMonthStr(date.month)} ${date.year}`}
            </button>
            <div className="flex items-center h-full">
              <button
                onClick={handlePrevMonth}
                className="hover:bg-[#f3f3f3] rounded-[5px] w-6 h-6 flex justify-center items-center"
              >
                <MdOutlineKeyboardArrowLeft className="text-[rgba(25,25,25,0.8)]" />
              </button>
              <button onClick={goToSelectedDate}>
                <GoDot className="text-[rgba(25,25,25,0.8)]" />
              </button>
              <button
                onClick={handleNextMonth}
                className="hover:bg-[#f3f3f3] rounded-[5px] w-6 h-6 flex justify-center items-center"
              >
                <MdOutlineKeyboardArrowRight className="text-[rgba(25,25,25,0.8)]" />
              </button>
            </div>
          </div>
          {isSelectingMonth ? (
            <div className="flex flex-col justify-between gap-2 mx-3">
              {arr2.map((arrItem, idx) => {
                return (
                  <div key={arrItem} className="flex justify-between ">
                    {MONTHS.slice(idx * 4, arrItem * 4).map((month) => {
                      return (
                        <div
                          key={month}
                          className="text-xs leading-7 text-center w-7 h-7"
                        >
                          <button
                            onClick={() => setIsSelectingMonth(false)}
                            className={`w-full h-full ${
                              selectedMonth === month
                                ? "bg-[#4772FA] text-white"
                                : "hover:bg-[#ECF1FE] text-[rgba(25,25,25)]"
                            } rounded-full`}
                          >
                            {month}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="flex justify-between mx-3">
                {WEEKS.map((day, idx) => {
                  return (
                    <span
                      key={idx}
                      className="flex-none text-xs leading-7 text-center text-[rgba(25,25,25,0.4)] w-7"
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-col justify-between mx-3">
                {WEEKS.map((_, idx) => {
                  return (
                    <div key={idx} className="flex justify-between">
                      {getDates(date.month, date.year, date.cureentDate)
                        .slice(idx * 7, (idx + 1) * 7)
                        .map((day) => {
                          const isSelectedDate = getSelectedDay(
                            date.cureentDate,
                            date.year,
                            date.month,
                            day.date.split("-").pop()
                          );

                          return (
                            <div
                              key={day.date}
                              className="text-xs leading-7 text-center w-7 h-7"
                            >
                              <button
                                className={`w-full h-full rounded-full ${
                                  isSelectedDate && day.isCurrentMonth
                                    ? ""
                                    : "hover:bg-[#ECF1FE]"
                                }  ${
                                  isSelectedDate &&
                                  day.isCurrentMonth &&
                                  "bg-[#4772FA]"
                                }  ${
                                  day.isCurrentMonth && isSelectedDate
                                    ? "text-white"
                                    : day.isCurrentMonth
                                    ? "text-[rgba(25,25,25)]"
                                    : "text-[rgba(25,25,25,0.4)]"
                                }`}
                              >
                                <time dateTime={day.date}>
                                  {day.date.split("-").pop()}
                                </time>
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col mt-2">
          <button className="text-[13px] text-[rgba(25,25,25,0.8)] hover:bg-[#f3f3f3] mx-1 px-3 h-8 rounded flex items-center justify-between">
            <div className="flex flex-auto items-center gap-2">
              <CiClock2 className="h-[18px] w-[18px]" />
              <span>Time</span>
            </div>
            <MdOutlineKeyboardArrowRight className="text-[--icon-color]" />
          </button>
          <button className="text-[13px] text-[rgba(25,25,25,0.8)] hover:bg-[#f3f3f3] mx-1 px-3 h-8 rounded flex items-center justify-between">
            <div className="flex flex-auto items-center gap-2">
              <IoAlarmOutline className="h-[18px] w-[18px]" />
              <span>Reminder</span>
            </div>
            <MdOutlineKeyboardArrowRight className="text-[--icon-color]" />
          </button>
          <button className="text-[13px] text-[rgba(25,25,25,0.8)] hover:bg-[#f3f3f3] mx-1 px-3 h-8 rounded flex items-center justify-between">
            <div className="flex flex-auto items-center gap-2">
              <BsRepeat className="h-[18px] w-[18px]" />
              <span>Repeat</span>
            </div>
            <MdOutlineKeyboardArrowRight className="text-[--icon-color]" />
          </button>
        </div>
      </div>
      <div className="mx-4 flex justify-between gap-2">
        <button className="h-8 min-w-20 text-sm text-[rgba(25,25,25,0.6)] hover:bg-[#F4F4F4] active:bg-[#E8E8E8] border border-[rgba(25,25,25,0.1)] px-[18px] flex flex-auto items-center justify-center rounded-md">
          Clear
        </button>
        <button className="h-8 min-w-20 bg-[#4772FA] text-sm text-white hover:bg-[#6C8EFB] active:bg-[#3E60CD] border border-[rgba(25,25,25,0.1)] px-[18px] flex flex-auto items-center justify-center rounded-md">
          OK
        </button>
      </div>
    </div>
  );
};
