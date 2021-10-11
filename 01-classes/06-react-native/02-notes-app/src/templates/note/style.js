import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  note: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 8,
    marginRight: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  noteTitle: {
    color: "#444",
    fontSize: 22,
    fontWeight: "bold",
  },
  noteText: {
    color: "#333",
    fontSize: 16,
    width: 250,
  },
});
