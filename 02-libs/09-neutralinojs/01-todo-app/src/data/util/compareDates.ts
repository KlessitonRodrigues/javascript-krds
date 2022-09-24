export const isSameDate = (date1: string, date2: string) => {
  return new Date(date1).toLocaleDateString() === new Date(date2).toLocaleDateString();
};

export const isSameTime = (date1: string, date2: string) => {
  return new Date(date1).toLocaleTimeString() === new Date(date2).toLocaleTimeString();
};

export const isSameDateAndTime = (date1: string, date2: string) => {
  return isSameDate(date1, date2) && isSameTime(date1, date2);
};
