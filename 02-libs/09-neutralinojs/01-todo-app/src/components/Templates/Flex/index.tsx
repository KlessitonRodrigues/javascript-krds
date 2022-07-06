import { CSSProperties, ReactNode } from "react";

type Props = {
  x?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-around"
    | "space-between";
  y?: "stretch" | "flex-start" | "flex-end" | "center";
  column?: boolean;
  children: ReactNode;
};

const Flex = (props: Props) => {
  const flexStyle: CSSProperties = {
    display: "flex",
    flexDirection: props.column ? "column" : "row",
    alignItems: props.y || "center",
    justifyContent: props.x || "center",
  };

  return <div style={flexStyle}>{props.children}</div>;
};

export default Flex;
