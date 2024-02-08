import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Button, TextInput, Modal,Image } from 'react-native';
import Header from './Component/Header';
import Product from './Component/product';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductWrapper from './Component/productwrapper';
import Customer from './Component/CustomerList';
function App(): React.JSX.Element {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <stack.Navigator>
        <stack.Screen name='Home' component={ProductWrapper}/>
        <stack.Screen name='List' component={Customer}/>
      </stack.Navigator>
      
      

    </NavigationContainer>
  );
}




export default App;