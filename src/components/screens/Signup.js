import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [showTerms, setShowTerms] = useState(false);

    const handleSignup = () => {
        if (email === '' || password === '' || confirmPassword === '' || name === '' || surname === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Perform signup logic here, such as making an API request

        // Reset form fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        setSurname('');

        // Navigate to the login screen
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>

            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    value={surname}
                    onChangeText={setSurname}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowTerms(true)}>
                    <Text style={styles.termsText}>Read Terms of Policy</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={showTerms} transparent>
                <View style={styles.termsContainer}>
                    <Text style={styles.termsTitle}>Terms of Policy</Text>
                    <Text style={styles.termsContent}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo vitae sem tempus aliquet. Mauris
                        volutpat odio mauris, et congue ligula fermentum a. Morbi pulvinar consequat malesuada. Donec in feugiat
                        velit. Duis a urna mauris. Suspendisse ut dictum urna.
                    </Text>
                    <TouchableOpacity style={styles.acceptButton} onPress={() => setShowTerms(false)}>
                        <Text style={styles.acceptButtonText}>Accept</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    formContainer:
