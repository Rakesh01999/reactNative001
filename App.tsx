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
        borderWidth: 1,
        borderTopWidth: 5,
        borderRightWidth: 10,
        borderLeftWidth: 10,
        borderBottomWidth: 10,
        borderColor: 'green',
        borderRadius:10,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50
      }}>
        <Text>Hello, World</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;