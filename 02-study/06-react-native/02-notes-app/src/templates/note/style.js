import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  note(isActive) {
    const borderBlue = isActive
      ? {
          borderColor: "#4449",
        }
      : {};

    return {
      flexDirection: "column",
      flexWrap: "wrap",
      alignItems: "flex-start",
      backgroundColor: "#FFF",
      borderRadius: 12,
      padding: 8,
      marginRight: 8,
      borderWidth: 3,
      borderColor: "#0000",
      ...borderBlue,
    };
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  noteTitle: {
    color: "#444",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 8,
  },
  noteText: {
    color: "#333",
    fontSize: 16,
    minWidth: 150,
    maxWidth: 200
  },
});
