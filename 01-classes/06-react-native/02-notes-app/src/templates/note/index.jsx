import React from "react";
import { View, Text } from "react-native";

import Badge from "../badge/index";
import { styles } from "./style";

/** @type { Note } */
const Note = ({ badge = "", text = "" }) => (
  <View style={styles.note}>
    <Badge>{badge}</Badge>
    <Text style={styles.noteText}>{text.substring(0, 90)}</Text>
  </View>
);

export default Note;

/** @typedef {( props: {
 * badge: string
 * text: string
 * }) => JSX.Element } Note
 */
