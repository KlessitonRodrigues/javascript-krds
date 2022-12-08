import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

import RoundedButton from "../../templates/roundedButton/index";
import If from "../../templates/if/if";
import { NotesContext } from "../../providers/notesStore";
import { styles } from "./style";

const NoteEditor = () => {
  const [{ onEditor, notes }, newAction] = useContext(NotesContext);
  const emptyNote = { title: "", text: "" };
  const [note, setNote] = useState(emptyNote);

  useEffect(() => {
    if (onEditor >= 0) return setNote(notes[onEditor]);
    setNote(emptyNote);
  }, [onEditor]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        value={note.title}
        onChangeText={(title) => setNote({ ...note, title })}
        placeholder={"Title"}
        placeholderTextColor="#FFF"
      />
      <TextInput
        style={styles.text}
        multiline
        value={note.text}
        onChangeText={(text) => setNote({ ...note, text })}
        placeholder={"write you note here!"}
        placeholderTextColor="#999"
      />
      <If test={onEditor >= 0}>
        <RoundedButton
          text="💾"
          style={{ bottom: 16, right: 120 }}
          onChange={() => newAction("UPDATE_NOTE", note)}
        />
      </If>
      <RoundedButton
        text="+"
        style={{ bottom: 16, right: 8 }}
        onChange={() => newAction("ADD_NOTE", note)}
      />
      <RoundedButton
        text="-"
        style={{ bottom: 16, right: 64 }}
        onChange={() => newAction("REMOVE_NOTE")}
      />
    </View>
  );
};

export default NoteEditor;
