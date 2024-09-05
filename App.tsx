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


const App = () => {
  let array = Array(300).fill(0);
  const ScrollViewRef = useRef(null);

  const handleClick = () => { 
    ScrollViewRef.current.scrollTo({x:0, y:0, animated:true}) ;
  };
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>refs and useRef</Text>
        </View>
      </View>



      <Button onPress={handleClick} title="Scroll To Top"></Button>

      <ScrollView ref={ScrollViewRef} style={{marginBottom:300}}>
        {array.map((value, index: number) => <Text key={index} style={{ color: 'black' }}>{index}  Hello World</Text>)}
      </ScrollView>
        
    </SafeAreaView>
  )
}

export default App;