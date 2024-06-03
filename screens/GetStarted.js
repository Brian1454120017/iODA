// screens/HomeScreen.js

import React from 'react';
import {StyleSheet,TouchableOpacity, View, Button, Text, Image } from 'react-native';
import externalStyles from '../assets/main';


const GetStartedScreen = ({ navigation }) => {

  const handleRedirectToLogin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}> 
        <View style={styles.contentContainer}> 
          <Text style={externalStyles.title}>
            Welcome to iODA!
          </Text>
          <Image source={require('../assets/welcome.png')} style={styles.img} />
          <Text style={{ textAlign: 'center',fontSize: 18, margin: 40, marginTop: 10, marginBottom: 0}}>
            An all in one ordering app, that enables you to make purchase across different retail and wholesale venders across zambia all in one place.
          </Text>
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity  onPress={handleRedirectToLogin}>
          <Text style={styles.primaryButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </View>
      
     
    </View>
  );y
};

const styles = StyleSheet.create({

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '70%',
    margin: 'auto',
  },


  img: {
    width: 170,
    height: '40%',
    margin: 15,
  },

  primaryButton:{
    color: '#ffffff', 
    width: 200, 
    textAlign:'center', 
    fontSize: 18, 
    fontWeight: 'bold', 
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 50,
  },

});
export default GetStartedScreen;
