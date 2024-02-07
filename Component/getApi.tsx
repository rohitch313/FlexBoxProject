import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import Customer from '../Services/interface';
import { fetchCustomerData } from '../Services/api';

function AppApi(): React.JSX.Element {
    const [data, setData] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setError] = useState(null);


    useEffect(() => {
        const fetcData = async () => {
            try {
                const customerData = await fetchCustomerData();
                setData(customerData);
                setLoading(false)
            } catch (error) {
                setError(fetchError);
                setLoading(false)
            }
        };
        fetcData();
    }, [])
    if (loading) {
        return <ActivityIndicator />;
    }

    if (fetchError) {
        return <Text>Error: {fetchError}</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>List of Customers</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.customerContainer}>
                        <Text style={styles.customerProperty}>Call: {item.call}</Text>
                        <Text style={styles.customerProperty}>WhatsApp: {item.whatsApp}</Text>
                        <Text style={styles.customerProperty}>Email: {item.email}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    customerContainer: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    customerProperty: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default AppApi;
