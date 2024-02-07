import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
function Header(): React.JSX.Element {



  return (
    <View >
 <Text style={styles.container}>0</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
   textAlign:'right',
   color:'green',
   fontWeight:'bold',
   fontSize:30
  },
  
})


export default Header;