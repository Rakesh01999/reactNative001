import React from "react";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'

// function App(){
//   return(
//     <SafeAreaView>
//       <View>
//         <Text>Hello</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

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