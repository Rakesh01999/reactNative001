import React, { useEffect, useRef, useState } from "react";
import MyText from "./Components/MyText/MyText";
import Item from "./Components/Item/Item";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button
} from 'react-native'
import style from "./Components/MyText/style";
import { ThemeProvider } from "./Components/ThemeProvider";
import { ThemeToggle } from "./Components/ThemeToggle";


const App = () => {
  
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>useContext</Text>
        </View>
      </View>

      <ThemeProvider>
        <ThemeToggle></ThemeToggle>
      </ThemeProvider> 
        
    </SafeAreaView>
  )
}

export default App;