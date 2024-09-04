import React from "react";
import MyText from "./Components/MyText/MyText";
import Item from "./Components/Item/Item";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, paddingVertical:25, paddingHorizontal:120}}>
          <Text style={{color:'white', fontSize:20}}>React Native by Rakesh</Text>
      </View>
      <Item name={'Chair'} price={100}></Item>
      <Item name={'Table'} price={340}></Item>
      <Item name={'Desk'} price={210}></Item>
    </SafeAreaView>
  )
}

export default App;