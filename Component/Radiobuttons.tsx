import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

function AppR(): React.JSX.Element {
  const skills =[
    {
      id:1,
      name:'java'
    },
    {
      id:2,
      name:'C#'
    },
    {
      id:3,
      name:'Python'
    },
    {
      id:4,
      name:'SQL'
    },
  ]
  const [selectedRadio, setSelectedRadio] = useState(1);

  return (
    <View style={styles.main}>
   {
    skills.map((item,index)=> <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
    <View style={styles.radioWrapper}>
      <View style={styles.radio}>
        {selectedRadio === item.id ? <View style={styles.radiobg}></View> : null}
      </View>
      <Text style={styles.radiotext}>{item.name}</Text>
    </View>
  </TouchableOpacity>)

   }
     
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     alignSelf:'center'
  },

  radiotext: {
    fontSize: 30,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

export default AppR;
