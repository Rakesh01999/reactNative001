import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native'
import useToggle from "./customHooks/useToggle";

const App = () => {
  const [isOn, toggleOn]= useToggle(false);
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>Custom Hook</Text>
        </View>
      </View>

        <Text>{isOn ? 'ON' : 'OFF'}</Text>
      <Button title={"Toggle"} onPress={toggleOn}></Button>
      
    </SafeAreaView>
  )
}

export default App;