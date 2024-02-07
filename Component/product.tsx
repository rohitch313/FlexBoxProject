import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Button,Image, TextInput, Modal } from 'react-native';
import {useDispatch} from 'react-redux'
import { addtoCart } from './redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ADD_TO_CART } from './redux/constant';




function Product(props:any): React.JSX.Element {
    const dispatch =useDispatch()
const handleAddToCart =()=>{
    console.warn("call",props.item)
   dispatch(addtoCart(props.item))

}


    return (
        
<View style={styles.container} ><Text style={{fontSize:20}}>{props.item.name}</Text>
        <Text style={{fontSize:20}}>{props.item.price}</Text>
        <Text style={{fontSize:20}}>{props.item.color}</Text>
        <Image style={{height:200,width:200,resizeMode: 'contain' }}source={{uri:props.item.image}}/>
        <Button title='Add to Cart'onPress={handleAddToCart}/>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom:20,
        alignItems:'center',
        textAlign:'center',
        borderBottomColor:'gold',
        borderBottomWidth:2,
        paddingBottom:15
        
    },
  

})


export default Product;