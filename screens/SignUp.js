// screens/HomeScreen.js

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { RadioButton } from 'react-native-paper'; 
import RNPickerSelect from 'react-native-picker-select';
import externalStyles from '../assets/main';

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

  const handleSignIn = () => {
    // Implement your login logic here
    navigation.navigate('Signin');
  };

  const handleCancel = () => {
    navigation.navigate('Getstarted');
  };

  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.caption }>Sign Up</Text>
      {/* <View style={styles.logoContainer}>
        <Image source={require('../assets/signup.png')} style={styles.logo} />
      </View> */}
      <Text>Enter your credentials below to create an account</Text>
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={text => setFullName(text)}
        style={styles.inputFeild}
      />

      {/* Radio button */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text  style={{ color: '#ff0000', fontSize: 16, fontWeight: 'bold',  }}>Select Gender</Text>
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
        style={styles.inputFeild}
      />


      <TextInput
        placeholder="Home Address"
        value={homeAddress}
        onChangeText={text => setHomeAddress(text)}
        style={styles.inputFeild}
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
            padding: 5,
            margin: 6,
            width: 200,
          },
        }}
      />          

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.inputFeild}
      />

      <TextInput
        placeholder="Verify Password"
        value={verifyPassword}
        onChangeText={text => setVerifyPassword(text)}
        secureTextEntry
        style={styles.inputFeild}
      />

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.loginButton}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={externalStyles.signUpLinkWrap}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={handleSignIn} style={{ display: 'flex', marginLeft: 5, }}>
            <Text style={{ color: '#ff0000', fontWeight: 'bold',}}>Sign In</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={handleCancel} style={{ marginRight: 5 }}>
          <Text style={{ color: 'red', fontWeight: 'bold', padding: 10, fontSize: 16 }}>Cancel</Text>
        </TouchableOpacity> */}
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


  caption: {
    fontSize: 30,
    color: '#ff0000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center', 
  },

  logo: {
    width: 152,
    height: 110,
    marginBottom: 3, 
  },

  loginButton:{
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

  inputFeild: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    margin: 10,
    width: 300, 
  },
});

export default SignUpScreen;
