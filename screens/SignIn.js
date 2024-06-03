// screens/HomeScreen.js

import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import externalStyles  from '../assets/main';

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
    navigation.navigate('Getstarted');
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
      <Text style={styles.caption }>Sign In</Text>
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
      <View style={styles.forgottenPasswordWrap}>
        <TouchableOpacity onPress={handleResetPassword}>
          <Text style={{ color: '#ff0000', padding: 10, fontSize: 14,}}>Forgotten Password</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity  onPress={handleLogin}>
          <Text style={ styles. loginButton}>Sign In</Text>
        </TouchableOpacity>

      {/* <View style={{ flexDirection: 'row', marginTop: 10, }}>
        <TouchableOpacity onPress={handleCancel} style={{ marginRight: 5 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', padding: 10, fontSize: 18}}>Cancel</Text>
        </TouchableOpacity>
      </View> */}
      <View style={externalStyles.signUpLinkWrap}>
        <Text>Dont have an account?</Text>
        <TouchableOpacity onPress={handleRedirectToSignUp} style={{ display: 'flex', marginLeft: 5, }}>
          <Text style={{ color: '#ff0000', fontWeight: 'bold',}}>Sign Up</Text>
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
    color: '#ff0000',
    fontWeight: 'bold',
    marginBottom: 40,
  },

  caption: {
    fontSize: 40,
    color: '#ff0000',
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

  forgottenPasswordWrap: {
    width: '80%',
    alignItems: 'flex-end',
  },

  loginButton:{
    backgroundColor: '#ff0000',
    color: '#ffffff', 
    width: 200, 
    textAlign:'center', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 15, 
    marginBottom: 15,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 50,
  },
  


});

export default SignInScreen;
