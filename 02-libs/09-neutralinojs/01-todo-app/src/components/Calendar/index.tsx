import { Box, Grow } from "@mui/material";

import { calendarGrid, dayBoxStyles } from "./styles";

const weekdays = ["JULY", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN", ""];
const week1 = [
  "WEEK 1",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "CARD",
  "END",
];

const dayBoxes = weekdays.map((dayName) => (
  <Grow in>
    <Box style={dayBoxStyles("month")} color="primary.800">
      {dayName}
    </Box>
  </Grow>
));

const weekBoxes = week1.map((dayName) => (
  <Grow in>
    <Box style={dayBoxStyles("day")} color="primary.800">
      {dayName}
    </Box>
  </Grow>
));

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
