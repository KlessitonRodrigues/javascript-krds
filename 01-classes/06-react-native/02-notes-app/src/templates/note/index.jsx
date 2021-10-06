import React from "react";
import { View, Text } from "react-native";

import Badge from "../badge/index";
import { styles } from "./style";

/** @type { Note } */
const Note = ({ badge = "..", text = "..", date = ".." }) => (
  <View style={styles.note}>
    <View style={styles.header}>
      <Badge>{badge}</Badge>
      <Text style={styles.noteDate}>{date}</Text>
    </View>
    <Text style={styles.noteText}>{text.substring(0, 90)}</Text>
  </View>
);

export default Note;

/** @typedef {( props: {
 * badge: string
 * text: string
 * date: Date
 * }) => JSX.Element } Note
 */
