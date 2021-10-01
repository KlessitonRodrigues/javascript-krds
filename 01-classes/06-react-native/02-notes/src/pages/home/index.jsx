import React from "react";
import { View, FlatList } from "react-native";

import NoteEditor from "../../components/noteEditor/index";
import NoteStore from "../../components/noteStore/index";
import { styles } from "./style";

const Home = () => (
  <View style={styles.container}>
    <NoteEditor />
    <NoteStore />
  </View>
);

export default Home;
