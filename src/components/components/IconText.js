/* eslint-disable prettier/prettier */
import React from "react";
import {
    View, Text,StyleSheet
} from "react-native";

//State is an object that contains information about a component that we want to track.
//In the object we use key-value pairs
//states helps us to add remove and modify things in out component
//we can trigger UI updates based on the changes
//when the state changes the component rerenders.
//state help us internally manage data within the our component

const IconText = (props) => {
    const { iconName, iconColor,bodyText,bodyTextSytles} = props
    return (
        <View></View>
    )
}

export defualt IconText;