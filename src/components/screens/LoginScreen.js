/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native';
import LoginComponent from './LoginComponent';

const LoginScreen = () => {
    const [pan, setPan] = useState(new Animated.ValueXY());
    const [showLogin, setShowLogin] = useState(false);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
            if (gesture.dy < -50) {
                setShowLogin(true);
            }
            Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gesture);
        },
        onPanResponderRelease: (e, gesture) => {
            if (gesture.dy > 0) {
                setShowLogin(false);
                Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
            }
        },
    });

    return (
        <View style={styles.container}>
            {!showLogin ? (
                <Animated.View style={[styles.emptyScreen, pan.getLayout()]} {...panResponder.panHandlers}>
                    <Text style={styles.swipeText}>Swipe up to login</Text>
                </Animated.View>
            ) : (
                    <View style={styles.loginScreen}>
                        <LoginComponent/>
                    {/* Your login screen components */}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyScreen: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    swipeText: {
        fontSize: 18,
        marginBottom: 20,
    },
    loginScreen: {
        flex: 1,
        /* backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', */
    },
});

export default LoginScreen;