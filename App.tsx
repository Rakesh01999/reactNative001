import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>ScrollView Component</Text>
        </View>
      </View>

      <ScrollView
        onScroll={() => {
          console.log('We are now scrolling')
        }}
        contentContainerStyle={{ backgroundColor: "red", height: 600 }}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Image source={require('./assets/images/cake.png')}
          style={{ height: 500, width: 500 }}
        />
        <Image source={require('./assets/images/cake.png')}
          style={{ height: 500, width: 500 }}
        />
        <Image source={require('./assets/images/cake.png')}
          style={{ height: 500, width: 500 }}
        />
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App;