import { Box, Grow } from "@mui/material";

import { topLeft, dayBoxStyles, DayBoxStyles, bottomLeft } from "../styles";

export type Props = {
  data: {
    styleType: DayBoxStyles;
    name: string;
    topLeft?: any;
    bottomLeft?: any;
  };
};

const CalendarItem = ({ data }: Props) => {
  return (
    <Grow in>
      <Box style={dayBoxStyles(data.styleType)} color="primary.800">
        {data.name}
        <Box style={topLeft}>{data.topLeft}</Box>
        <Box style={bottomLeft}>{data.bottomLeft}</Box>
      </Box>
    </Grow>
  );
};

export default CalendarItem;
