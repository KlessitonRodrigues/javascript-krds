import React from "react";
import { View, Text } from "react-native";

import Home from "./pages/home/index";
import { styles } from "./style";

const Body = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

export default Body;
