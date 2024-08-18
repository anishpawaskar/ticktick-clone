export const formatDate = (date) => {
  const inputDate = new Date(date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday = inputDate.toDateString() === today.toDateString();
  const isYesterday = inputDate.toDateString() === yesterday.toDateString();

  if (isToday) {
    return "Today";
  } else if (isYesterday) {
    return "Yesterday";
  } else {
    const options = { month: "long", day: "numeric" };
    const formatedDate = inputDate.toLocaleDateString("en", options);
    const dateArr = formatedDate.split(" ");
    const trimmedMonth = dateArr[0].slice(0, 3);

    return `${trimmedMonth} ${dateArr[1]}`;
  }
};
