import React from "react";
import { View } from "react-native";

import NoteEditor from "../../components/noteEditor/index";
import NoteStore from "../../components/noteStore/index";
import { NotesProvider } from "../../providers/notesStore";
import { styles } from "./style";

const Home = () => (
  <View style={styles.container}>
    <NotesProvider>
      <NoteStore />
      <NoteEditor />
    </NotesProvider>
  </View>
);

export default Home;
