import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ActivityIndicator, Button } from 'react-native';

function Appa(props:any): React.JSX.Element {
  console.warn(props.route.params)
  // const {name,age}=props.route.params;
 const[show,setShow]=useState(false)
function displayloader(){
setShow(true)
//api call 3 sec
setTimeout(() => {
  setShow(false)
}, 3000);
}
  return (
    <View style={styles.main}>
   {/* <ActivityIndicator size={"large"} color={"red"} animating={false}/>
   <ActivityIndicator size={"large"} color={"blue"} />
   <ActivityIndicator size={"large"} color={"green"} />
   <ActivityIndicator size={"large"} color={"yellow"} /> */}
   {/* <ActivityIndicator size={"large"} color={"brown"} animating={show} /> */}
   
   {
    show?<ActivityIndicator size={"large"} color={"brown"} />:null
   }

   <Button title='show loader'onPress={displayloader}/>
   {/* <Text style={{fontSize:30}}>Name: {name}</Text>
   <Text style={{fontSize:30}}>Age: {age}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    
    justifyContent: 'center',
    textAlign:'center',
    alignSelf:'center'
  },

 
});

export default Appa;
