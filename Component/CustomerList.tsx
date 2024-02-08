import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';
import {useSelector} from 'react-redux';
import { Store } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Customer(): React.JSX.Element {

  
 
 



  return (
    <View >
 <Text style={styles.container}>Cutomer list screen</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
   textAlign:'center',
   color:'green',
   fontWeight:'bold',
   fontSize:30
  },
  
})


export default Customer;