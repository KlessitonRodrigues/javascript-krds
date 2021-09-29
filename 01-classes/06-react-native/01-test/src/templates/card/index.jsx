import React from "react";
import { View } from "react-native";

import styles from "./style";

const Card = props => <View style={styles.container}>{props.children}</View>;

export default Card;
