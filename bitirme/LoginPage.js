/** npx react-native run-ios --simulator='iPhone 14 Pro (16.0)' */
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        // Replace with your own login logic
        if (email === 'example@example.com' && password === 'password123') {
            setLoginMessage('Login successful!');
            console.log('Login successful!');
            navigation.replace('QuizPage'); // Use replace instead of navigate
            //navigation.navigate('QuizPage'); // Redirect to QuizPage
        } else {
            setLoginMessage('Invalid email or password');
            console.log('Invalid email or password');
        }

        // Clear login message after 3 seconds
        setTimeout(() => {
            setLoginMessage('');
        }, 3000);
    };

    const handleSignUp = () => {
        // Handle sign-up action
        console.log('Sign up button pressed');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>Not have an account?</Text>
                <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                    <Text style={styles.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            {loginMessage !== '' && <Text style={styles.message}>{loginMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    loginButton: {
        backgroundColor: 'blue',
        paddingVertical: 16,
        borderRadius: 8,
        marginBottom: 8,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signupContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    signupText: {
        marginRight: 8,
    },
    signupButton: {
        backgroundColor: 'lightblue',
        alignContent:'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
    },
    signupButtonText: {
        fontSize: 14,
    },
    message: {
        marginTop: 16,
        color: 'red',
        fontSize: 16,
    },
});

export default LoginPage;
