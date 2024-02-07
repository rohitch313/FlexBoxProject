import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, TouchableOpacity, Platform, Text, ActivityIndicator, Button, Modal, Pressable } from 'react-native';
import Appa from './ActivityIndicator';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login';

function AppNav(): React.JSX.Element {
  function btnAction() {
    console.warn("button pressed")
  }

  const stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',

          },
          headerTitleStyle: {
            fontSize: 25,

          },
          headerTintColor: 'red'
        }}>
        <stack.Screen name="Login" component={Login}
        />
        <stack.Screen name="Activity" component={Appa} options={{
          headerStyle: {
            backgroundColor: 'yellow',

          },
          headerTitleStyle: {
            fontSize: 25,

          },
          headerTintColor: 'red',
          headerTitle: (props) => <Button title='Left' onPress={btnAction} />,
          headerRight: (props) => <Button title='Right' onPress={btnAction} />
        }}>

        </stack.Screen>


      </stack.Navigator>

    </NavigationContainer>
  );
}


export default AppNav;
