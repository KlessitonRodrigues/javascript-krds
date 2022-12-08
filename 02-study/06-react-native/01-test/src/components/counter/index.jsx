import React, { useRef, useState } from "react";
import { Text, Button, TouchableOpacity } from "react-native";

import Card from "../../templates/card/index";
import styles from "./style";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isPaused, setPaused] = useState(false);

  const timeout = setTimeout(() => {
    isPaused && setCounter(counter + 1);
  }, 1000);

  return (
    <Card>
      <Text style={styles.title}>COUNTER</Text>
      <Text style={styles.counter}>{counter}</Text>
      <TouchableOpacity
        style={styles.button}
        title={counter === 0 ? "START" : isPaused ? "PAUSE" : "CONTINUE"}
        onPress={() => {
          setPaused(!isPaused);
          clearTimeout(timeout);
        }}
      >
        <Text style={styles.buttonText}>
          {counter === 0 ? "START" : isPaused ? "PAUSE" : "CONTINUE"}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};

export default Counter;
