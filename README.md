## Basic Commands
1. 
```
npm install -g npm@10.8.1
```
2. Project creation:
```
npx react-native@latest init reactNative01
```
3. Run Android:
```
npx react-native run-android
```


## Borders at App.tsx
```
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
```


## Margins at App.tsx
```
<View style={{
        backgroundColor:'yellow', 
        // margin:10,
        // marginTop:5,
        // marginLeft:50,
        // marginRight:50,
        // marginBottom:50,
        marginVertical:50,
        marginHorizontal:50
      }}>
        <Text>Hello, World</Text>
      </View>
      <View style={{
        backgroundColor:'orange'
      }}>
        <Text>Hello, World</Text>
      </View>
```

## padd, pos, abs, rel, z idx code

```
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
```

## Text Styles

```
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
```

## Component -code
```
// Components>MyText>MyText.js

import React from "react";

import { Text } from "react-native";

const MyText = () => {
    return <Text>Hello , React Native World !</Text>
}

export default MyText ; 
```

## Stylesheets -code
```
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    text:{
        color:'red'
    },
    text1:{
        color:'blue'
    }
});

export default style ;

// Components>MyText>MyText.js

import React from "react";
import style from "./style";

import { Text } from "react-native";

const MyText = () => {
    return <Text style={[style.text, style.text1, {color:'green'}]}> Hello , React Native World !</Text>
}

export default MyText ; 
```

## View Component -code
```

  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, paddingVertical:25, paddingHorizontal:100}}>
          <Text style={{color:'white', fontSize:20}}>This is going to be our header container</Text>
      </View>
      <View style={{backgroundColor:'yellow'}}>
        <MyText />
        <MyText />
        <MyText />
      </View>
      <View>
        <Text>All Rights Reserved</Text>
      </View>
    </SafeAreaView>
  )
```

## Props, prop-types
cmd:
```
npm install prop-types
```
* code *
```
// Components>Item>Item.js

import React from "react";
import {View, Text} from 'react-native'
import PropTypes from 'prop-types';

const Item = ({name, price}) => {
    return (
        <View>
            <Text>Name:{name}</Text>
            <Text>Price:{price}</Text>
        </View>
    );
};

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default Item ;
```

## Event Handling

```
import React from "react";
import style from "./style";

import { Alert, Text } from "react-native";

const MyText = () => {
    const handleTextClick = () => {
        alert('The Text has been clicked')
    }
    return (
        <Text style={[style.text, style.text1, {color:'green'}]} onPress={()=> handleTextClick()}>Click Here to see alert message</Text>
    )
}

export default MyText ; 

```

## useState -code
```
import React, { useState } from "react";
import MyText from "./Components/MyText/MyText";
import Item from "./Components/Item/Item";

import {
  View,
  Text,
  SafeAreaView
} from 'react-native'


const App = () => {
  const [text, setText] = useState('Hello Wrold !');
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue', height: 100, paddingVertical:25, paddingHorizontal:120}}>
          <Text style={{color:'white', fontSize:20}}>React Native by Rakesh</Text>
      </View>
      <Item name={'Chair'} price={100}></Item>
      <Item name={'Table'} price={340}></Item>
      <Item name={'Desk'} price={210}></Item>
      <View>
        <MyText/>
      </View>
      <View style={{paddingVertical:30, paddingHorizontal:100}}>
        <Text onPress={()=> setText('Hello World, I learned how to change state !!')}>{text}</Text>
      </View>
    </SafeAreaView>
  )
}

export default App;
```

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.



# Connect React Native App to a "Physical Device" via Wi-Fi

This guide will walk you through setting up an existing React Native project to run on a physical device using Wi-Fi.

## Steps
### **Prepare Your Physical Device**
 Enable Developer Options: Navigate to your phone’s Settings > About phone, and tap on the Build number seven times to unlock Developer Options.
 Activate USB Debugging: Go to Settings > Developer options and enable USB debugging.
 Enable Wireless Debugging: If your device supports it, also activate Wireless debugging.
 

 Verify Device Connection
 Open a terminal and ensure your device is connected by running:

**Go to your pc**

 Go to -> 
 React Native-Project repo\React Native Project\android\app\build\outputs\apk\debug

 *Example:*
 E:\React Native\React Native - Nata Vacheishvili\React Native Mobile App Development\reactNative001\android\app\build\outputs\apk\debug

 -> "app-debug" - send this file to the physical device .

  PC ->cmd -> `ipconfig`
  ```bash
  ipconfig
  ```
  -> copy the `IPv4 Address`.

  **Go to Physical Device**
  install 'app-debug' -apk > open it > shake your device >  settings > click- Debug Server host and port for device > paste the the `IPv4 Address`:8081 > ok

  Now, Go to Metro (Node) > Reload by commanding `r`


