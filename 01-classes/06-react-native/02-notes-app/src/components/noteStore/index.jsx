import React, { useContext } from "react";
import { ScrollView } from "react-native";

import Note from "../../templates/note/index";
import { NotesContext } from "../../providers/notes";
import { styles } from "./style";

const NoteStore = () => {
  const [notes, setNotes] = useContext(NotesContext);
  const mapNotes = notes.store.map(({ index, text, date }) => (
    <Note key={index} badge={index + 1} text={text} date={date} />
  ));

  return (
    <ScrollView style={styles.container} horizontal>
      {mapNotes}
    </ScrollView>
  );
};

export default NoteStore;
