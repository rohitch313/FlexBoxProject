import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
function AppAsync(): React.JSX.Element {

  const [Name,setName]=useState('');
 
const setData =async()=>{
 await AsyncStorage.setItem("Name","Rohit Kumar")
 
}
const getData = async () => {
  const name = await AsyncStorage.getItem("Name");
  if (name !== null) {
    setName(name);
  } else {
    // Handle case when AsyncStorage returns null (no data found)
    // For example, you could set a default value for Name
    setName("");
  }
};
async function removedata(){
  await AsyncStorage.removeItem("Name");
  setName('')
}

  return (
    <View style={styles.container}>
 <Text style={{fontSize:40}}>AsyncStorage with react native {Name}</Text>
 <Button title='Set Data' onPress={setData}/>
 <Button title='Get Data' onPress={getData}/>
 <Button title='Remove Data' onPress={removedata}/>

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


export default AppAsync;