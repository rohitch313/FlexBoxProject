import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getUserList } from './redux/action';

function Customer(): React.JSX.Element {
    const dispatch = useDispatch();
    const userlist = useSelector((state) => state.cast);

    useEffect(() => {
        dispatch(getUserList(),[]);
    }, []);

    return (
        <View style={styles.container}>
            {userlist.length ? (
                <FlatList
                    data={userlist}
                    renderItem={({ item }) => (
                        <View style={styles.items}>
                            <Text style={styles.text}>Call: {item.call}</Text>
                            <Text style={styles.text}>Whatsapp: {item.whatsApp}</Text>
                            <Text style={styles.text}>Email: {item.email}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()} // Use index as the key
                />
            ) : (
                <Text>No data available</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    items: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    text: {
        fontSize: 18,
    },
});

export default Customer;
