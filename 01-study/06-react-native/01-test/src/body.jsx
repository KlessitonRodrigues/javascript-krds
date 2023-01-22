import React from "react";
import { View } from "react-native";

import Header from "./components/header/index";
import Home from "./pages/home/index";
import styles from "./style";

const Body = () => (
  <View style={styles.container}>
    <Header />
    <Home />
  </View>
);

export default Body;
