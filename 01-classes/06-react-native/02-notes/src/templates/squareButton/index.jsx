import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

/** @type {SquareButton} */
const SquareButton = ({ text }) => (
  <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default SquareButton;

/** @typedef {(props: {
 * text: string
 * }) => JSX.Element} SquareButton */
