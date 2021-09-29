import React from "react";
import { View, TextInput } from "react-native";

import SquareButton from "../../templates/squareButton/index";
import { styles } from "./style";

const NoteEditor = () => (
  <View style={styles.container}>
    <TextInput style={styles.text} multiline />
    <SquareButton text="+" />
  </View>
);

export default NoteEditor;
