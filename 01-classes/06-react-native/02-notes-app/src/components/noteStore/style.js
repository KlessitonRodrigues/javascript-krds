import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container(show = true) {
    return {
      display: show ? "flex" : "none",
      maxHeight: 150,
    };
  },
});
