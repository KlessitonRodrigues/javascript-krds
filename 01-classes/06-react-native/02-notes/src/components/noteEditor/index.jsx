import React from "react";
import { View, TextInput } from "react-native";

import SquareButton from "../../templates/squareButton/index";
import { styles } from "./style";

const NoteEditor = () => (
  <View style={styles.container}>
    <TextInput style={styles.text} multiline />
    <SquareButton text="+" style={{ bottom: 16, right: 16 }} />
    <SquareButton text="-" style={{ bottom: 16, right: 72 }}/>
  </View>
);

export default NoteEditor;
