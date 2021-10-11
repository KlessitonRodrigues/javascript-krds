import React, { useContext } from "react";
import { ScrollView } from "react-native";

import Note from "../../templates/note/index";
import { NotesContext } from "../../providers/notesStore";
import { styles } from "./style";

const NoteStore = () => {
  const [notesState, notesDispatch] = useContext(NotesContext);

  function mapNotes() {
    if (notesState.notes.length === 0) return false;
    return notesState.notes.map(
      ({ title = "", text = ""}, index) => (
        <Note key={index} badge={index + 1} text={text} title={title} />
      )
    );
  }

  return (
    <ScrollView style={styles.container} horizontal>
      {mapNotes()}
    </ScrollView>
  );
};

export default React.memo(NoteStore);
