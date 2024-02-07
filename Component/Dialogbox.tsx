import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button, Modal } from 'react-native';

function AppD(): React.JSX.Element {

const[show,setShow]=useState(false)
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={show} animationType='fade'>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 25, marginBottom: 20 }}>Hello this is a modal</Text>
            <Button title='Close Modal' onPress={()=>setShow(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.button}><Button title='Open Modal' onPress={()=>setShow(true)}/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,


    textAlign: 'center',

  },
  button: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 10,

  }

});

export default AppD;
