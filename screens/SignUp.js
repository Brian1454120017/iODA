// screens/HomeScreen.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import RNPickerSelect from 'react-native-picker-select';

const SignUpScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSignUp = () => {
    // Implement your Sign Up logic here
    // Implement your Sign Up logic here
    navigation.navigate('Login');
  };

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    // Implement your cancel logic here
    // For now, just navigate back to the Splash screen
    navigation.navigate('Home');
  };

  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <View style={styles.logoContainer}>
            {/* <Image source={require('/snappetTest/assets/logo.png')} style={styles.logo} /> */}
            <Text style={styles.appName}>iODA</Text>
      </View>
      <Text style={styles.caption }>SIGN UP</Text>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300 }}
      />

      {/* Radio button */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text  style={{ color: '#2D448B', fontSize: 18, fontWeight: 'bold',  }}>Select Gender</Text>
        <RadioButton.Android
          value="male"
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text>Male</Text>
        <RadioButton.Android
          value="female"
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text>Female</Text>
      </View>

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300 }}
      />


      <TextInput
        placeholder="Home Address"
        value={homeAddress}
        onChangeText={text => setHomeAddress(text)}
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300 }}
      />

      <RNPickerSelect
        placeholder={{ label: 'Select a city', value: null }}
        onValueChange={(value) => setSelectedCity(value)}
        items={[
          { label: 'Ndola', value: 'Ndola' },
          { label: 'Kitwe', value: 'Kitwe' },
          { label: 'Luanshya', value: 'Luanshya' },
          { label: 'Mufulira', value: 'Mufulira' },

          // Add more cities as needed
        ]}

        style={{
            inputAndroid: {
            borderWidth: 1,
            borderRadius: 50,
            padding: 6,
            margin: 10,
            width: 300,
          },
        }}
      />          

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300, }}
      />

      <TextInput
        placeholder="Verify Password"
        value={verifyPassword}
        onChangeText={text => setVerifyPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, borderRadius: 50, padding: 6, margin: 10, width: 300, }}
      />

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.loginButton}>SIGNUP</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity onPress={handleLogin} style={{ marginLeft: 5 }}>
          <Text style={{ color: '#2D448B', fontWeight: 'bold', padding: 10, fontSize: 18 }}>
            Already Have an Account?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={{ marginRight: 5 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', padding: 10, fontSize: 18 }}>Cancel</Text>
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
    width: 70, // Adjust as needed
    height: 70, // Adjust as needed
    marginBottom: 3, // Add some space between logo and text
  },

  loginButton:{
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

export default SignUpScreen;
