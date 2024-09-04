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
      <View>
          {/* <Text>Hello, World !</Text> */}
          <MyText></MyText>
      </View>
    </SafeAreaView>
  )
}

export default App;