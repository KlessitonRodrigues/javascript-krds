export const getMonthDates = (dateStr: string) => {
  const getFirstMonthDay = (targetDate: Date) => {
    targetDate.setDate(1);
    return targetDate;
  };

  const getLastMonthDay = (targetDate: Date) => {
    targetDate.setMonth(targetDate.getMonth() + 1);
    targetDate.setDate(0);
    return targetDate;
  };

  return {
    firstMonthDay: getFirstMonthDay(new Date(dateStr)),
    lastMonthDay: getLastMonthDay(new Date(dateStr)),
  };
};

export const getCalendarDates = (dateStr: string) => {
  const weekStartDay = 1; // Monday
  const weekEndDay = 0; // Sunday

  const monthDays = getMonthDates(dateStr);

  const fillFirstWeek = (targetDate: Date) => {
    while (targetDate.getDay() !== weekStartDay) {
      targetDate.setDate(targetDate.getDate() - 1);
    }
    return targetDate;
  };

  const fillLastWeek = (targetDate: Date) => {
    while (targetDate.getDay() !== weekEndDay) {
      targetDate.setDate(targetDate.getDate() + 1);
    }
    return targetDate;
  };

  return {
    ...monthDays,
    fillFirstWeek: fillFirstWeek(new Date(monthDays.firstMonthDay)),
    fillLastWeek: fillLastWeek(new Date(monthDays.lastMonthDay)),
  };
};

export const getCalendarGap = (startDate: string, endDate: string) => {
  const dates: string[] = [];
  const startTime = new Date(startDate);
  const endTime = new Date(endDate);

  if (startTime.getTime() >= endTime.getTime()) return [];

  while (startTime.getTime() <= endTime.getTime()) {
    dates.push(startTime.toISOString());
    startTime.setDate(startTime.getDate() + 1);
  }

  return dates;
};
