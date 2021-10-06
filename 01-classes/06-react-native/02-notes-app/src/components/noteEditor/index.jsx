import React, { useContext, useState } from "react";
import { View, TextInput } from "react-native";

import SquareButton from "../../templates/squareButton/index";
import { NotesContext } from "../../providers/notes";
import { styles } from "./style";

const NoteEditor = () => {
  const { editorIndex, notes } = useContext(NotesContext);
  const [editorNote, setEditorNote] = useState(notes[editorIndex]);

  const handleAddBtn = () => {
    console.warn(editorNote);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        multiline
        value={editorNote.text}
        onChangeText={(text) => setEditorNote({ ...editorNote, text })}
      />
      <SquareButton
        text="+"
        style={{ bottom: 16, right: 16 }}
        onChange={handleAddBtn}
      />
      <SquareButton text="-" style={{ bottom: 16, right: 72 }} />
    </View>
  );
};

export default NoteEditor;
