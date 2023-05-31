import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const QuizPage = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: null, // Remove the back button from the header
        });
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default QuizPage;
