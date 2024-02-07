import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Platform, Text, ActivityIndicator, Button, Modal, Pressable } from 'react-native';
import Appa from './ActivityIndicator';
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import Login from './Login';
const Tab = createMaterialTopTabNavigator();
function AppTop(): React.JSX.Element {
  


 

  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Login' component={Login}/>
      <Tab.Screen name='Activity' component={Appa}/>
    </Tab.Navigator>
   </NavigationContainer>
   
  );
}


export default AppTop;
