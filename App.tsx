import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Switch
} from 'react-native'

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldKeepLogin, setShouldKeepLogin] = useState(true);
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'blue', height: 100, paddingTop: 20, paddingHorizontal: 100 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>React Native by Rakesh</Text>
        </View>
        <View style={{ backgroundColor: 'green', height: 70, paddingVertical: 5, paddingHorizontal: 100, alignItems: "center" }}>
          <Text style={{ color: 'yellow', fontSize: 20 }}>Button Component Form Submission</Text>
        </View>
      </View>

      <View>
        <ScrollView>
          <TextInput
            value={email}
            keyboardType={'email-address'}
            style={{ borderWidth: 1, borderRadius: 7, marginHorizontal: 8, marginTop: 10 }}
            placeholder={'Please enter your email here'}
            onChangeText={value => {
              setEmail(value)
            }}
          />
          <TextInput
            value={password}
            secureTextEntry={true}
            style={{ borderWidth: 1, borderRadius: 7, marginHorizontal: 8, marginTop: 10 }}
            placeholder={'Please enter your password here'}
            onChangeText={value => {
              setPassword(value)
            }}
          />
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <Switch value={shouldKeepLogin} onValueChange={(value) => {
              setShouldKeepLogin(value);
            }} />
            <Text>Keep me logged in</Text>
          </View>

          <TouchableOpacity
            style={[{ backgroundColor: 'black', margin: 10, borderRadius: 20 },
            email.length === 0 || password.length < 8 && { opacity: 0.5 }]}
            disabled={email.length === 0 || password.length < 8}
            onPress={() => {
              console.log('clicked');
              console.log(email, password, shouldKeepLogin);
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}


export default App;