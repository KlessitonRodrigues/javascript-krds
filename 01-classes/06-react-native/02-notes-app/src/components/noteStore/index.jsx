import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";

import Note from "../../templates/note/index";
import { NotesContext } from "../../providers/notes";
import { styles } from "./style";

const NoteStore = () => {
  const notesContext = useContext(NotesContext);
  const mapNotes = notesContext.notes.map(({ index, text }) => (
    <Note key={index} badge={index} text={text} />
  ));

  return (
    <ScrollView style={styles.container} horizontal>
      {mapNotes}
    </ScrollView>
  );
};

export default NoteStore;
