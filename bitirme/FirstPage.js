import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const FirstPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: height * 0.15,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 16,
        borderRadius: 8,
        marginVertical: 8,
        width: width * 0.8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default FirstPage;
