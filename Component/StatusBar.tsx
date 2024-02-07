import React, { useState } from 'react';
import {StatusBar, StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button, Modal,Pressable } from 'react-native';

function App(): React.JSX.Element {

const[show,setShow]=useState(true)
  return (
    <View style={styles.main}>
   <StatusBar
   backgroundColor="orange" barStyle='light-content' hidden={show}/>
   <Button title='toggle status bar' onPress={()=>setShow(!show)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
justifyContent:'center',

    textAlign: 'center',

  },

  


});

export default App;
