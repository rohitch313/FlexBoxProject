import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removetoCart } from './redux/action';
import { useNavigation } from '@react-navigation/native';

function Product(props: any): React.JSX.Element {
    const navigation =useNavigation();
    const cartData = useSelector((state) => state.cast);
    const [added, setAdded] = useState(false);

    const item = props.item;
    const dispatch = useDispatch();

    const handleAddToCart = (item: any) => {
        dispatch(addtoCart(item));
    }

    const handleRemoveToCart = (itemName: string) => {
        dispatch(removetoCart(itemName));
    }

    useEffect(() => {
        setAdded(cartData.some((cartItem: any) => cartItem.name === item.name));
    }, [cartData, item.name]);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>{props.item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Image style={{ height: 200, width: 200, resizeMode: 'contain' }} source={{ uri: item.image }} />
            {
                added ?
                    <Button title='Remove from Cart' onPress={() => handleRemoveToCart(item.name)} /> :
                    <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        alignItems: 'center',
        textAlign: 'center',
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        paddingBottom: 15
    },
});

export default Product;
