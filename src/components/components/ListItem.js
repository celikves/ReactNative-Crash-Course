/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const {date,temp,item} = styles
    return (
        <View style={item}>
            <Text>
                <IonIcon name="ios-sunny" size={50} color="yellow"></IonIcon>
            </Text>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around', // items around evenly distributed
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink',
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15,
    },
})

export default ListItem;
