import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = () => {
    const [emailText, onChangeText] = React.useState("");
    const [password, setPassword] = React.useState("");


    return (
        <View style={styles.signinbox}>
            <View style={styles.logInButtonBox}>
                <View style={{ padding: 5 }}>
                    <TextInput
                        onChangeText={onChangeText}
                        style={styles.input}
                        value={emailText}
                        placeholder="Enter your Email"
                        placeholderTextColor="black" />
                </View>
                <View style={{ padding: 5 }}>
                    <TextInput
                        onChangeText={setPassword}
                        style={styles.input}
                        value={password}
                        placeholder="Enter Password"
                        placeholderTextColor="black" />
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    signinbox: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        
        
        backgroundColor: '#c9c9c9',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    signinbox: {
        flex: 0,
        flexDirection: 'column',
    },
    logInButtonBox: {
        padding: 20,
    },
});
