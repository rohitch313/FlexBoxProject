import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Button, TextInput, Modal,Image } from 'react-native';
import Header from './Component/Header';
import Product from './Component/product';
function App(): React.JSX.Element {

  const product = [
    {
      name: 'samsung Mobile',
      color: 'white',
      price: 30000,
      image: 'https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=jBbq785jB2cMkQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fsamsung_mobile_phone%2f1-2-samsung-mobile-phone-free-png-image.png&ehk=6PfI7HM5KCQsM5zxtaO9mwr8jsOyEbzHiBxHsER2vco%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Nokia Mobile',
      color: 'black',
      price: 20000,
      image: 'https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=jBbq785jB2cMkQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fsamsung_mobile_phone%2f1-2-samsung-mobile-phone-free-png-image.png&ehk=6PfI7HM5KCQsM5zxtaO9mwr8jsOyEbzHiBxHsER2vco%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Apple Iphone',
      color: 'green',
      price: 50000,
      image: 'https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=jBbq785jB2cMkQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fsamsung_mobile_phone%2f1-2-samsung-mobile-phone-free-png-image.png&ehk=6PfI7HM5KCQsM5zxtaO9mwr8jsOyEbzHiBxHsER2vco%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Mi Mobile',
      color: 'white',
      price: 10000,
      image: 'https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=jBbq785jB2cMkQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fsamsung_mobile_phone%2f1-2-samsung-mobile-phone-free-png-image.png&ehk=6PfI7HM5KCQsM5zxtaO9mwr8jsOyEbzHiBxHsER2vco%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      name: 'Realme Mobile',
      color: 'white',
      price: 15000,
      image: 'https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=jBbq785jB2cMkQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fsamsung_mobile_phone%2f1-2-samsung-mobile-phone-free-png-image.png&ehk=6PfI7HM5KCQsM5zxtaO9mwr8jsOyEbzHiBxHsER2vco%3d&risl=&pid=ImgRaw&r=0'
    }
  ]
  return (
    <View style={styles.container}>
        <Header  />
      <Text style={styles.title}>UI for add to cart with redux</Text>
    <ScrollView>
      {
        product.map((item) =><Product item ={item} />)
      }
      </ScrollView>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:20,
    marginRight:20

  },
  title:{
    marginBottom:20,
    marginTop:10,
    fontSize:27,
    fontWeight:'bold',
    backgroundColor:'yellow',
    color:'red'

  }

})


export default App;