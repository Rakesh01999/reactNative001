import React, { useEffect, useState } from "react";
import MyText from "./Components/MyText/MyText";
import Item from "./Components/Item/Item";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'
import style from "./Components/MyText/style";


const App = () => {
  const [text, setText] = useState(0);

  // console.log('Hi !', text)
  useEffect(()=> {
    console.log('The text has changed !')
  }, [text])
  useEffect(()=> {
    console.log('The component has rendered !')
  }, [])
  return (
    <SafeAreaView>
      <View>
      <View style={{backgroundColor: 'blue', height: 100,  paddingTop:20, paddingHorizontal:100}}>
          <Text style={{color:'white', fontSize:20}}>React Native by Rakesh</Text>
      </View>
      <View style={{backgroundColor: 'green', height: 50, paddingVertical:5, paddingHorizontal:100, alignItems:"center"}}>
          <Text style={{color:'yellow', fontSize:20}}>useEffect</Text>
      </View>
      </View>
      <Item name={'Chair'} price={100}></Item>
      <Item name={'Table'} price={340}></Item>
      <Item name={'Desk'} price={210}></Item>
      <View>
        <MyText/>
      </View>
      <View style={{backgroundColor:'orange', width:100, alignItems:"center", marginVertical:20, marginHorizontal:150}}>
        <Text style={{color:'black'}} onPress={()=> setText(text+1)}>{text}</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;