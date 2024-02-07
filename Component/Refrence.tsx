import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';
import Customer from '../Services/interface';
import {postNumber} from '../Services/api';
import { fetchCustomerData } from '../Services/api';
function App(): React.JSX.Element {

   const input = useRef();
function updateInput(){
  console.warn("call")
  input.current.focus();
 

}
  return (
    <View style={styles.container}>
<TextInput style={styles.input} placeholder='Enter Name'/>
<TextInput ref={input}  style={styles.input} placeholder='Enter Password'/>
<Button title='Input' onPress={updateInput}/>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
padding:16,
  },
  input:{
    borderColor:'skyblue',
    borderWidth:2,
    margin:10
  }
})


export default App;