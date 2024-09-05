import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image
} from 'react-native'

const App = () => {
  const [imageSource, setImageSource] = useState({uri:'http://example.com'})
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>Image Component</Text>
        </View>
      </View>

      <View>
        {/* <Image source={require('./assets/images/cake.png')} */}
        <Image source={imageSource}
          // style={{ height: 200, width: 200 , backgroundColor:'red'}}
          style={{ height: '100%', width: '100%' , backgroundColor:'red'}}
          // resizeMode={"contain"}
          // resizeMode={"stretch"}
          // resizeMode={"repeat"}
          resizeMode={"center"}
          onError={()=>{
            console.log('Error has been detected while loading an image')
            setImageSource(require('./assets/images/cake.png'))
          }}
          />
      </View>
      <View>
        <Image source={{ uri: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80" }}
          style={{ height: 300, width: 300 }} />
      </View>
    </SafeAreaView>
  )
}

export default App;