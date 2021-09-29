import React from "react";
import { View } from "react-native";

import NoteEditor from "../../components/noteEditor/index";
import NoteStore from "../../components/noteStore/index";

const Home = () => (
  <View style={{ height: "100%" }}>
    <NoteEditor />
    <NoteStore />
  </View>
);

export default Home;
