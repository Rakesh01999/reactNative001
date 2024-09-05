import React, { useEffect, useState } from "react";
import MyText from "./Components/MyText/MyText";
import Item from "./Components/Item/Item";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  const [text, setText] = useState('Hello Wrold !');
  const [msg, setMsg] = useState('Welcome to React Native');
  // console.log('Hi !', text)
  useEffect(()=> {
    console.log('The text has changed !')
  }, [msg])
  useEffect(()=> {
    console.log('The component has rendered !')
  }, [])
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, paddingVertical:25, paddingHorizontal:100}}>
          <Text style={{color:'white', fontSize:20}}>React Native by Rakesh</Text>
      </View>
      <Item name={'Chair'} price={100}></Item>
      <Item name={'Table'} price={340}></Item>
      <Item name={'Desk'} price={210}></Item>
      <View>
        <MyText/>
      </View>
      <View style={{paddingVertical:30, paddingHorizontal:100}}>
        <Text onPress={()=> setText('Hello World, I learned how to change state !!')}>{text}</Text>
      </View>
      <View style={{paddingVertical:30, paddingHorizontal:100}}>
        <Text onPress={()=> setMsg('Hello World, I just used useEffect Hook !!')}>{msg}</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;