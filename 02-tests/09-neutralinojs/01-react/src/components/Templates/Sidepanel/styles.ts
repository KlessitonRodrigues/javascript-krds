import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const sidepanelOpen: CSSProperties = {
  position: "fixed",
  right: "0px",
  height: "90%",
  boxShadow: "0 2px 8px 0 #4444",
  borderRadius: "0.5rem",
  transitionDuration: "0.6s",
};

export const sidepanelClose: CSSProperties = {
  ...sidepanelOpen,
  visibility: "hidden",
  right: "-100%",
};
