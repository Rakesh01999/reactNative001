import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor:'yellow', 
        // margin:10,
        // marginTop:5,
        // marginLeft:50,
        // marginRight:50,
        // marginBottom:50,
        marginVertical:50,
        marginHorizontal:50,
        padding:10,
        // paddingLeft:100,
        // paddingHorizontal:"auto",
        // paddingVertical:"auto",
        paddingVertical:50,
        paddingHorizontal:50
        
      }}>
        <Text>Hello, World</Text>
      </View>
      <View style={{
        backgroundColor:'orange'
      }}>
        <Text>Hello, World</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;