import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Title from '../Components/Title'
import Colors from '../Constants/Colors'
const Start = ({ onLogin, onRegister }) => {
    const onHandleLogin = () => onLogin(true)

    const onHandleRegister = () => onRegister(true)


    return (
        <SafeAreaView style={styles.container}>
            <Title
                title={'Bienvenidos'}
                style={styles.title}
            />
            <Card style={styles.cardContainer}>
                <View style={styles.buttonContainer}>
                    <Button title='Login' onPress={onHandleLogin} color={Colors.secondary} />
                    <Button title='Registro' onPress={onHandleRegister} color={Colors.secondary} />
                </View>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
        padding: 10
    },

})

export default Start