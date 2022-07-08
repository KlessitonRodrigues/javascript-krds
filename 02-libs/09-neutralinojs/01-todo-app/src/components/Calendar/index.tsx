import { Box } from "@mui/material";
import { BsClock } from "react-icons/bs";

import CalendarItem, { Props as CalendarItemProps } from "./CalendarItem";
import TagItem from "../Tags/TagItem";
import { calendarDate, calendarGrid } from "./styles";

const weekdays = ["JULY", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const week1 = [
  "WEEK 1",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
];

const dayBoxes = weekdays.map((name, i) => {
  const data: CalendarItemProps["data"] = {
    name,
    styleType: i === 0 ? "month" : "header",
    topLeft: <BsClock />,
  };

  return <CalendarItem data={data} />;
});

const weekBoxes = week1.map((name, i) => {
  const data: CalendarItemProps["data"] = {
    name,
    styleType: i === 0 ? "weekId" : "day",
    topLeft: [1],
    bottomLeft: [<TagItem label="Study" />, <TagItem label="Remider" />],
  };

  return <CalendarItem data={data} />;
});

const Calendar = () => {
  return (
    <Box>
      <Box style={calendarGrid}>
        {dayBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
        {weekBoxes}
      </Box>
    </Box>
  );
};

export default Calendar;
