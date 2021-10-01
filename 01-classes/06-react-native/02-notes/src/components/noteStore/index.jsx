import React from "react";
import { View, Text } from "react-native";

import { styles } from "./style";

const NoteStore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>
        <Text style={styles.badge}>1</Text>
        NOTA fsekfseofnoefns
      </Text>
      <Text style={styles.note}>1. NOTA fsekfseofnoefns</Text>
      <Text style={styles.note}>1. NOTA fsekfseofnoefns</Text>
      <Text style={styles.note}>1. NOTA fsekfseofnoefns</Text>
      <Text style={styles.note}>1. NOTA fsekfseofnoefns</Text>
    </View>
  );
};

export default NoteStore;
