import React, { useState } from 'react';
import {StatusBar, StyleSheet, View, TouchableOpacity,Platform, Text, ActivityIndicator, Button, Modal,Pressable } from 'react-native';

function AppPlatform(): React.JSX.Element {

const[show,setShow]=useState(true)
  return (
    <View style={styles.main}>
  <Text style={{fontSize:30}}>
Platform: {Platform.OS}
  </Text>
  {
    Platform.OS =="android"?<View style={{backgroundColor:'red',height:100, width:100}}></View>:
    <View style={{backgroundColor:'green',height:100, width:100}}></View>

  }
    </View>
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

export default AppPlatform;
