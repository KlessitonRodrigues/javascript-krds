export const isSameDate = (date1: string, date2: string) => {
  const dataObj1 = new Date(date1);
  const dataObj2 = new Date(date2);

  return (
    dataObj1.getFullYear() === dataObj2.getFullYear() &&
    dataObj1.getMonth() === dataObj2.getMonth() &&
    dataObj1.getDate() === dataObj2.getDate()
  );
};

export const isSameTime = (date1: string, date2: string) => {
  const dataObj1 = new Date(date1);
  const dataObj2 = new Date(date2);

  return (
    dataObj1.getHours() === dataObj2.getHours() && dataObj1.getMinutes() === dataObj2.getMinutes()
  );
};

export const isSameDateAndTime = (date1: string, date2: string) => {
  return isSameDate(date1, date2) && isSameTime(date1, date2);
};
