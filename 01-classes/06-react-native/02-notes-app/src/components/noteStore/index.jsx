import React, { useContext } from "react";
import { ScrollView } from "react-native";

import Note from "../../templates/note/index";
import { NotesContext } from "../../providers/notesStore";
import { styles } from "./style";

function mapNotes(onEditor, notes, newAction) {
  if (!notes.length) return false;

  return notes.map(({ title, text }, index) => (
    <Note
      key={index}
      badge={index + 1}
      text={text}
      title={title}
      isActive={index === onEditor}
      onPress={() => newAction("CHANGE_ONEDITOR", index)}
    />
  ));
}

const NoteStore = () => {
  const [state, newAction] = useContext(NotesContext);
  const { onEditor, notes } = state;

  return (
    <ScrollView style={styles.container(notes.length)} horizontal>
      {mapNotes(onEditor, notes, newAction)}
    </ScrollView>
  );
};

export default React.memo(NoteStore);
