import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

/** @type {SquareButton} */
const SquareButton = ({ text, style, onChange }) => (
  <TouchableOpacity
    style={{ ...styles.container, ...style }}
    onPress={() => onChange()}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default SquareButton;

/** @typedef {(props: {
 * text: string
 * onChange: function
 * }) => JSX.Element} SquareButton */
