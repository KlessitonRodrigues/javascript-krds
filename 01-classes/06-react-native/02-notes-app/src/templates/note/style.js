import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  note: {
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    borderRadius: 12,
    fontWeight: "bold",
    padding: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
  },
  noteText: {
    color: "#222",
    fontSize: 18,
    width: 250,
  },
  noteDate: {
    color: "#444",
    fontSize: 16,
    fontWeight: "bold",
  },
});
