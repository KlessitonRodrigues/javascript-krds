import { CalendarTodo } from "../../../data/api/event/types";

export type Props = {
  name: string;
  time?: string;
  status: CalendarTodo['status'];
  onClick?: () => void;
};
