// screens/HomeScreen.js

import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Home');
  };

  const handleResetPassword = () => {
    // Implement your reset password logic here
    // This can navigate to a reset password screen or show a modal.
    alert('Reset Password clicked');
  };

  const handleCancel = () => {
    // Implement your cancel logic here
    // For now, just navigate back to the Splash screen
    navigation.navigate('Home');
  };

  const handleRedirectToSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       {/* <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.appName}>iODA</Text>
      </View> */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/login.png')} style={styles.logo} />
      </View>
      <Text style={styles.caption }>LOGIN</Text>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300, }}
      />

        <TouchableOpacity  onPress={handleLogin}>
          <Text style={ styles. loginButton}>LOGIN</Text>
        </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10, }}>
        <TouchableOpacity onPress={handleResetPassword} style={{ marginLeft: 5,}}>
          <Text style={{ color: '#2D448B', fontWeight: 'bold', padding: 10, fontSize: 18,}}>Forgotten Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={{ marginRight: 5 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', padding: 10, fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, }}>
        <TouchableOpacity onPress={handleRedirectToSignUp} style={{ marginLeft: 5,}}>
          <Text style={{ color: '#2D448B', fontWeight: 'bold', padding: 10, fontSize: 18,}}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appName: {
    fontSize: 35,
    color: '#2D448B',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  caption: {
    fontSize: 40,
    color: '#2D448B',
    fontWeight: 'bold',
  },
  
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Center both logo and text horizontally
  },

  logo: {
    width: 170, // Adjust as needed
    height: 200, // Adjust as needed
    marginBottom: 40, // Add some space between logo and text
  },

  loginButton:{
    backgroundColor: '#2D448B',
    color: '#ffffff', 
    width: 200, 
    textAlign:'center', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 15, 
    marginBottom: 15,
    backgroundColor: '#2d448b',
    padding: 10,
    borderRadius: 50,
  },

});

export default SignInScreen;
