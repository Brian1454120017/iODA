// screens/HomeScreen.js

import React from 'react';
import {StyleSheet,TouchableOpacity, View, Button, Text, Image } from 'react-native';

const GetStartedScreen = ({ navigation }) => {

  const handleRedirectToLogin = () => {
    navigation.navigate('Signin');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
       <View style={styles.contentContainer}>
       <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#2d448b'}}>
          Welcome to iODA!
        </Text>
        <Image source={require('../assets/welcome.png')} style={styles.img} />
        <Text style={{ textAlign: 'center',fontSize: 18, margin: 40, marginTop: 10, marginBottom: 0}}>
          An all in one ordering app, that enables you to make purchase across different retail and wholesale venders across zambia all in one place.
        </Text>
      </View>
      
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity  onPress={handleRedirectToLogin}>
          <Text style={styles.primaryButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );y
};


const styles = StyleSheet.create({

  contentContainer: {
    alignItems: 'center',
    marginTop: 100,
  },


  img: {
    width: 250,
    height: 300,
    marginBottom: 3,
  },

  primaryButton:{
    color: '#ffffff', 
    width: 200, 
    textAlign:'center', 
    fontSize: 18, 
    fontWeight: 'bold', 
    backgroundColor: '#2d448b',
    padding: 10,
    borderRadius: 50,
  },

});
export default GetStartedScreen;
