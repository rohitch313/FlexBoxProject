
import {
 
  StyleSheet,
  
  View,
  TouchableHighlight,
  Text
} from 'react-native';





function Appp(): React.JSX.Element {


  return (
    <View style={styles.main}>
   <TouchableHighlight>
    <Text style={styles.button}>Button</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button, styles.Success]}>Sucess</Text>
   </TouchableHighlight>
   <TouchableHighlight>
    <Text style={[styles.button,styles.Primary]} >Primary</Text>
   </TouchableHighlight>
    </View>
  );
} const styles = StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:'#bbb',
    color:'#fff',
    fontSize:24,
    textAlign:'center',
    padding:10,
    margin:10,
    borderRadius:10,
    shadowColor:'black',
    elevation:10,
    shadowOpacity:1
  },
  Success:{
    backgroundColor:'green'
  },
  Primary:{
    backgroundColor:'blue'
  }
  
}

)



export default Appp;
