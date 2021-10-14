import React, { useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";

import RoundedButton from "../../templates/roundedButton/index";
import { NotesContext } from "../../providers/notesStore";
import { styles } from "./style";

function newAction(dispatch, type, payload = null) {
  return dispatch({ type, payload });
}

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
        onChange={() => newAction(notesDispatch, "ADD_NOTE", note)}
      />
      <RoundedButton
        text="-"
        style={{ bottom: 16, right: 72 }}
        onChange={() => newAction(notesDispatch, "REMOVE_NOTE")}
      />
    </View>
  );
};

export default NoteEditor;
