import React, { useState } from 'react';
import {StatusBar, StyleSheet, View, TouchableOpacity,Platform, Text, ActivityIndicator, Button, Modal,Pressable } from 'react-native';
import {WebView} from 'react-native-webview';

function AppWeb(): React.JSX.Element {

const[show,setShow]=useState(true)
  return (
    <WebView source={{uri:"https://reactnative.dev/"}}/>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
justifyContent:'center',
alignItems:'center',
    textAlign: 'center',

  },




});

export default AppWeb;
