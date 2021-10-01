import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

/** @type {SquareButton} */
const SquareButton = ({ text, style }) => (
  <TouchableOpacity style={{ ...styles.container, ...style }}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default SquareButton;

/** @typedef {(props: {
 * text: string
 * }) => JSX.Element} SquareButton */
