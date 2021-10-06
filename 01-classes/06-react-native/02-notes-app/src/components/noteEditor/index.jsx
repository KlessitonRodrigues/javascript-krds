import React, { useContext, useState } from "react";
import { View, TextInput } from "react-native";

import RoundedButton from "../../templates/roundedButton/index";
import { NotesContext } from "../../providers/notes";
import { styles } from "./style";

const NoteEditor = () => {
  const [notes, setNotes] = useContext(NotesContext);
  const [editorNote, setEditorNote] = useState(notes.store[notes.editorIndex]);

  const handleAddBtn = () => {
    console.warn();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        multiline
        value={editorNote.text}
        onChangeText={(text) => setEditorNote({ ...editorNote, text })}
      />
      <RoundedButton
        text="+"
        style={{ bottom: 16, right: 16 }}
        onChange={handleAddBtn}
      />
      <RoundedButton text="-" style={{ bottom: 16, right: 72 }} />
    </View>
  );
};

export default NoteEditor;
