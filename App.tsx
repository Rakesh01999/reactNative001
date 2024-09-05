import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  TextInput
} from 'react-native'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 50, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>Text Input Component</Text>
        </View>
      </View>

      <TextInput style={{ borderWidth: 1, borderRadius: 10, marginTop: 20 }}
        value={textValue}
        onChangeText={value => {
          // console.log(value);
          setTextValue(value);
        }}
        autoFocus={true}
        //  autoFocus={false}
        placeholder={'Please Enter Your Name'}
      />

      <TextInput style={{ borderWidth: 1, borderRadius: 10, marginTop: 20 }}
        value={emailValue}
        onChangeText={value => {
          // console.log(value);
          setEmailValue(value);
        }}
        // returnKeyType={'route'}
        // returnKeyType={'go'}
        // returnKeyType={'next'}
        returnKeyType={'search'}
        keyboardType={'email-address'}
        autoFocus={true}
        //  autoFocus={false}
        placeholder={'Please Enter Your Email'}
      />

      <TextInput style={{ borderWidth: 1, borderRadius: 10, marginTop: 20 }}
        value={passwordValue}
        onChangeText={value => {
          // console.log(value);
          setPasswordValue(value);
        }}
        // keyboardType={'default'}
        // keyboardType={'numeric'}
        keyboardType={'numeric'}
        secureTextEntry={true}
        autoFocus={true}
        placeholder={'Please Enter Your Password'}
      />
    </SafeAreaView>
  )
}

export default App;