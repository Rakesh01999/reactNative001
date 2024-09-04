import React from "react";
import style from "./style";

import { Alert, Text } from "react-native";

const MyText = () => {
    const handleTextClick = () => {
        alert('The Text has been clicked')
    }
    return (
        <Text style={[style.text, style.text1, {color:'green'}]} onPress={()=> handleTextClick()}>Click Here to see alert message</Text>
    )
}

export default MyText ; 
