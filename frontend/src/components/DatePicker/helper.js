import { MONTHS } from "./datePicker.constant";

export const getYear = (date) => {
  const currentDate = new Date(date);
  return currentDate.getUTCFullYear();
};

export const getMonth = (date) => {
  const currentDate = new Date(date);
  return currentDate.getMonth() + 1;
};

export const getDay = (date) => {
  return new Date(date).getDate();
};

export const getMonthStr = (month) => {
  const monthArr = MONTHS.filter((value, idx) => {
    if (month === 0) {
      return idx === 0;
    } else if (month <= 12) {
      return idx === month - 1;
    }
  });

  return MONTHS[month - 1];
};

export const getSelectedDay = (date, year, month, day) => {
  const selectedDay = getDay(date);
  const selectedMonth = getMonth(date);
  const selectedYear = getYear(date);

  const selectedFromatedDate = formateDate(
    selectedYear,
    selectedMonth,
    selectedDay
  );
  const formatedDate = formateDate(year, month, day);

  if (formatedDate === selectedFromatedDate) {
    return true;
  } else {
    return false;
  }
};

export const formateDate = (year, month, day) => {
  return `${year}-${month}-${day}`;
};

export const formatDateInUTC = (date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+0000`;
};

export const getMonthWithYear = (date) => {
  const currentDate = new Date(date);
  const month = currentDate.getMonth() + 1;
  const year = getYear(date);

  const currentMonth = MONTHS.filter((_, idx) => idx === month - 1);
  return `${currentMonth} ${year}`;
};

export const getDaysInMonth = (month, year) => {
  const month30 = [4, 6, 9, 11];
  const isLeapYear = year % 4 === 0;

  if (month === 2) {
    if (isLeapYear) {
      return 29;
    } else {
      return 28;
    }
  } else if (month30.includes(month)) {
    return 30;
  } else {
    return 31;
  }
};

export const getMonthFirstDay = (month, year) => {
  return new Date(`${year}-${month}-01`).getDay() + 1;
};

export const isCurrentMonth = (date) => {
  const baseDate = new Date();

  const baseDateMonth = getMonth(baseDate);
  const baseDateYear = getYear(baseDate);
  const currentMonth = getMonth(date);
  const currentYear = getYear(date);

  if (baseDateMonth === currentMonth && baseDateYear === currentYear) {
    return true;
  } else {
    return false;
  }
};

export const getPreviousMonth = (month, year) => {
  const prevMonth = month > 1 ? month - 1 : 12;
  const prevYear = month > 1 ? year : year - 1;

  return { prevMonth, prevYear };
};

export const getNextMonth = (month, year) => {
  const nextMonth = month < 12 ? month + 1 : month;
  const nextYear = month !== 0 ? year : year + 1;

  return { nextMonth, nextYear };
};

export const isSelectedDate = (date) => {
  const baseDate = new Date();
  const baseFormatedDate = formateDate(baseDate);
  const currentFormatedDate = formateDate(date);

  if (currentFormatedDate === baseFormatedDate) {
    return true;
  } else {
    return false;
  }
};

export const getDates = (month, year, date) => {
  const dates = [];
  const CALENDAR_WEEKS = 6;

  const daysInMonth = getDaysInMonth(month, year);
  const monthFirstDate = getMonthFirstDay(month, year);
  const prevMonthDays = getDaysInMonth(month, year);
  const { prevMonth, prevYear } = getPreviousMonth(month, year);
  const { nextMonth, nextYear } = getNextMonth(month, year);
  const currentMonth = month;
  const currentYear = year;

  const daysFromPrevMonth = monthFirstDate - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + daysInMonth);

  // previous month days
  for (let i = 1; i <= daysFromPrevMonth; i++) {
    dates.push({
      date: formateDate(prevYear, prevMonth, 1 + prevMonthDays - i),
    });
  }
  dates.reverse(); //reverse previous months date

  //current month days
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      date: formateDate(currentYear, currentMonth, i),
      isCurrentMonth: true,
    });
  }

  //next month days
  for (let i = 1; i <= daysFromNextMonth; i++) {
    dates.push({ date: formateDate(nextYear, nextMonth, i) });
  }

  return dates;
};

export const setTomorrowsDate = () => {
  const currentDate = new Date();
  const currentFormatedDate = formatDateInUTC(currentDate);
  const day = getDay(currentFormatedDate);
  const month = getMonth(currentFormatedDate);
  const year = getYear(currentFormatedDate);

  return formatDateInUTC(new Date(`${year}-${month}-${day + 1}`));
};

export const setNextWeekDate = (date) => {
  const currentDate = new Date();
  const currentFormatedDate = formatDateInUTC(currentDate);
  const d = new Date(currentFormatedDate);
  const sevenDays = d.valueOf() + 7 * 24 * 60 * 60 * 1000;
  const day = getDay(sevenDays);
  const month = getMonth(sevenDays);
  const year = getYear(sevenDays);

  return formatDateInUTC(new Date(`${year}-${month}-${day}`));
};

export const setNextMonthDate = () => {
  const currentDate = new Date();
  const currentFormatedDate = new Date(currentDate);
  const day = getDay(currentFormatedDate);
  const month = getMonth(currentFormatedDate);
  const year = getYear(currentFormatedDate);

  return formatDateInUTC(new Date(`${year}-${month + 1}-${day}`));
};
