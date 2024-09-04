import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:'green', height: '100%'}}>
      <View style={{position:'relative', backgroundColor:'blue', padding: 20}}>
        <View style={{
          backgroundColor: 'yellow',
          // margin:10,
          // marginTop:5,
          // marginLeft:50,
          // marginRight:50,
          // marginBottom:50,
          marginVertical: 50,
          marginHorizontal: 50,
          padding: 10,
          // paddingLeft:100,
          // paddingHorizontal:"auto",
          // paddingVertical:"auto",
          paddingVertical: 50,
          paddingHorizontal: 50,
          position: 'relative'
        }}>
          <Text>Hello, World 1</Text>
        </View>
        <View style={{
          backgroundColor: 'orange',
          // backgroundColor: 'green',
          position: 'relative'
        }}>
          <Text>Hello, World 2</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;