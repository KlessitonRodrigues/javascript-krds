export const isSameDate = (date1: Date, date2: Date) => {
  return date1.toLocaleDateString() === date2.toLocaleDateString();
};

export const isSameTime = (date1: Date, date2: Date) => {
  return date1.toLocaleTimeString() === date2.toLocaleTimeString();
};

export const isSameDateAndTime = (date1: Date, date2: Date) => {
  return isSameDate(date1, date2) && isSameTime(date1, date2);
};
