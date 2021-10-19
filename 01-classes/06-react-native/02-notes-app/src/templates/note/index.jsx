import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Badge from "../badge/index";
import { styles } from "./style";

/** @type { Note } */
const Note = ({
  badge = "..",
  text = "..",
  title = "..",
  isActive = false,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.note(isActive)}
    onPress={onPress}
    activeOpacity={1}
  >
    <View style={styles.header}>
      <Badge>{badge}</Badge>
      <Text style={styles.noteTitle}>{title.substr(0, 20)}</Text>
    </View>
    <Text style={styles.noteText}>{text.substring(0, 80)}</Text>
  </TouchableOpacity>
);

export default Note;

/** @typedef {( props: {
 * badge: string
 * text: string
 * title: string
 * isActive: boolean
 * onPress: function
 * }) => JSX.Element } Note
 */
