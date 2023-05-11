import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';

const currentWeather = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text>
                    <IonIcon name="github" size={106} color="black"></IonIcon>
                </Text>
                <Text>Current Weather</Text>
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High:8 </Text>
                    <Text style={styles.highLow}> Low:5</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.desc}>Its sunny</Text>
                <Text style={styles.message}>Its perfect t-shirt weather</Text>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        fontSize: 30,
        color: 'black',
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    desc: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    }
})

export default currentWeather

