import React, { useContext, useState } from "react";
import { View, TextInput } from "react-native";

import RoundedButton from "../../templates/roundedButton/index";
import { NotesContext } from "../../providers/notesStore";
import { styles } from "./style";

const NoteEditor = () => {
  const [{ onEditor, notes }, notesDispatch] = useContext(NotesContext);
  const [note, setNote] = useState({ title: "", text: "", ...notes[onEditor] });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={note.title}
        onChangeText={(title) => setNote({ ...note, title })}
        placeholder={"Title"}
      />
      <TextInput
        style={styles.text}
        multiline
        value={note.text}
        onChangeText={(text) => setNote({ ...note, text })}
        placeholder={"Text"}
      />
      <RoundedButton
        text="+"
        style={{ bottom: 16, right: 16 }}
        onChange={() => notesDispatch({ type: "ADD_NOTE", payload: note })}
      />
      <RoundedButton text="-" style={{ bottom: 16, right: 72 }} />
    </View>
  );
};

export default NoteEditor;
