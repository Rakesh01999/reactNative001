import React from "react";
import style from "./style";

import { Text } from "react-native";

const MyText = () => {
    return <Text style={[style.text, style.text1, {color:'green'}]}> Hello , React Native World !</Text>
}

export default MyText ; 
