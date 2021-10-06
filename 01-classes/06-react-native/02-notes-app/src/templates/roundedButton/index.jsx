import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

/** @type {RoundedButton} */
const RoundedButton = ({ text, style, onChange }) => (
  <TouchableOpacity
    style={{ ...styles.container, ...style }}
    onPress={() => onChange()}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default RoundedButton;

/** @typedef {(props: {
 * text: string
 * onChange: function
 * }) => JSX.Element} RoundedButton */
