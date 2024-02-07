import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button, Modal,Pressable } from 'react-native';

function AppPress(): React.JSX.Element {


  return (
    <View style={styles.main}>
    <Pressable //onPress={()=>console.warn("normal on press")}
   // onLongPress={()=>console.warn("on long press")}
   onPressIn={()=>console.warn("Press in")} 
       onPressOut={()=>console.warn("Press out")} >
      <Text style={styles.press}>Pressable</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
justifyContent:'center',

    textAlign: 'center',

  },

 press:{
  backgroundColor:'blue',
  color:'white',
  padding:10,
  margin:10,
  borderRadius:10,
  fontSize:20,
  textAlign: 'center',
  shadowColor:'black',
  elevation:10
 }

});

export default AppPress;
