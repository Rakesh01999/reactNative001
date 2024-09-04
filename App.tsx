import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <Text style={{
            color: 'blue',
            fontFamily:'Arial',
            fontSize:30,
            fontStyle:'italic',
            fontWeight:'bold', 
            letterSpacing:10,
            lineHeight:50,
            // textAlign:'right',
            textAlign:'center',
            paddingTop:20
          }}>Hello, World !</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App;