import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Platform, Text, ActivityIndicator, Button, Modal, Pressable } from 'react-native';
function Login(props: any) {
    const name ='Ram kumar';
    const age =23;

    return (
      <View style={styles.main}>
        <Text style={{ fontSize: 30 }}>Login Screen</Text>
        <Button title='Go To Activity Page'
         onPress={() => props.navigation.navigate("Activity")} />
      </View>
    );
  
  
    
  }
  const styles = StyleSheet.create({
    main: {
      flex: 1,
  
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
  
    },
  
  
  
  
  });
  export default Login;
  ;
  