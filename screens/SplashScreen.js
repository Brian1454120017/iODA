// screens/SplashScreen.js
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate an asynchronous task (e.g., loading data) for 2 seconds
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
    };

    fetchData().then(() => {
      // Navigate to the GetStartedScreen after the splash screen duration
      navigation.replace('Getstarted');
    });
  }, [navigation]);

  return (
    <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-w.png')} style={styles.logo} />
        </View>
        <Text style={styles.appFooter}>Powered by Flamintouch Technologies</Text>
        <StatusBar style="auto" />
    </View>
  );
};



const styles = StyleSheet.create({

    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2D448B',
    },
  
    appName: {
      fontSize: 50,
      color: '#FFFFFF',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    appFooter: {
      position: 'absolute',
      bottom: 15,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontWeight: 'thin',
      color: '#FFFFFF',
    },
  
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center', // Center both logo and text horizontally
    },
  
    logo: {
      width: 100, // Adjust as needed
      height: 100, // Adjust as needed
      marginBottom: 10, // Add some space between logo and text
    },
  });

export default SplashScreen;
