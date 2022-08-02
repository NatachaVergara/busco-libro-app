import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import OrderItem from '../Components/OrderItem'
import { orders } from '../Data/Orders'

const OrdersScreen = () => {
    const onHandlerDelete = () => { console.log('Orden Eliminada') }


    const renderOrderItem = ({ item }) => (
        <OrderItem
            item={item}
            onDelete={onHandlerDelete}

        />
    )


    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={renderOrderItem}
                numColumns={1}
            />
        </View>
    )

    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        paddingBottom: 120,
        backgroundColor: '#fff',

    }
})
export default OrdersScreen