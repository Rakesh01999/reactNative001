import React from "react";
import MyText from "./Components/MyText/MyText";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, paddingVertical:25, paddingHorizontal:100}}>
          <Text style={{color:'white', fontSize:20}}>This is going to be our header container</Text>
      </View>
      <View style={{backgroundColor:'yellow'}}>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>All Rights Reserved</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;