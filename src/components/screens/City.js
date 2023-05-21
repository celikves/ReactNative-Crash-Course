/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from "react-native";
import IonIcon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../assets/city.jpg')} style={styles.imageLayout}>
                <Text style={styles.cityName, styles.cityText}>Manisa</Text>
                <Text style={styles.countryName, styles.cityText}>Turkey</Text>
                <View>
                    <Text><IonIcon name="ios-person" size={116} color="yellow"></IonIcon></Text>
                    <EntypoIcon name="video-camera" size={126} color="green" />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex:1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default City