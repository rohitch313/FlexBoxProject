import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';
import Customer from '../Services/interface';
import {postNumber} from '../Services/api';

function AppPost(): React.JSX.Element {
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [numberError, setnumberError] = useState(false);
  const [showmodal,setshowModeal]=useState(false);
  const [selectedNumber,setSelectedNumber]=useState(undefined)
  
  const saveData = async () => {
  
    setnumberError(false);
  setFetchError(null);

  // Validate phone number
  if (!number || number.length < 10) {
    setnumberError(true);
    return;
  }else{
    setnumberError(false)
  }
    console.warn("next");
    setLoading(true);
    try {
      await postNumber(number);
      setNumber("");
      console.warn("OTP Generated Successfully") // Clear input field after posting
      setLoading(false);
      // Optionally, display a success message to the user
    } catch (error) {
      setFetchError(fetchError);
      setLoading(false);
      // Optionally, display an error message to the user
    }
  };
const userUpdate =(data:any)=>{
  setshowModeal(true)
  setSelectedNumber(data)
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Number to API</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={(text) => setNumber(text)}
        placeholder="Add number"
        keyboardType="numeric"
      />
      {numberError?<Text style={styles.numberError}>Please Enter Valid Name and only 10 digit number</Text>:null}
      <Button title="Post Number" onPress={saveData} disabled={loading} />
     <View style={{marginTop:20}} ><Button title="Modal" onPress={()=>userUpdate(number)} disabled={loading} /></View>
      {loading && <ActivityIndicator style={styles.loader} />}
      {fetchError && <Text style={styles.error}>{fetchError}</Text>}

      <Modal visible={showmodal} transparent={true}>
        <UserModal setshowModeal  ={setshowModeal} selectedNumber={selectedNumber} savedata={saveData}/>
      </Modal>
    </View>
  );
}

function UserModal(props:any){
  // console.warn(props.selectedNumber);
  const[numberr,setNumberr]=useState(undefined)
  useEffect(()=>{
    if(props.selectedNumber){
      setNumberr(props.selectedNumber)
    }
  })
  const handleUpdate = async () => {
    // Call the update function (props.savedata) with the updated number
    await props.savedata();
    // Clear the input field after updating
    setNumberr(undefined);
  };
  return(
    
    <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Dummy Text</Text>
            <TextInput style={styles.input}  onChangeText={(text) => props.setNumberr(text)} value={numberr}/>
           <View style={{marginBottom:20}}><Button title='Update' onPress={handleUpdate} /></View> 
           <Button title='Close' onPress={()=>props.setshowModeal(false)}/>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 2,
    margin: 20,
    padding: 10,
    width: 200,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    marginTop: 20,
    color: 'red',
  },
  numberError:{
    color:'red',
   
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    
  },
  modalView:{
    backgroundColor:'#fff',
    padding:60,
    borderRadius:10,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:0.60
  }
});

export default AppPost;