import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { getVersion } from 'react-native-device-info'; // Library to get app version

const AboutScreen = () => {
//   const appVersion = getVersion(); // Get app version using react-native-device-info
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About iODA App</Text>
      <View style={styles.infoSection}>
        {/* <Text style={styles.infoText}>App Version: {appVersion}</Text> */}
        <Image source={require('../assets/new-logo.png')} style={styles.img} />
        <Text style={styles.infoText}>Developed By: Brian K Kasonde</Text>
        <Text style={styles.infoText}>Company: Flamintouch Technologies Co.</Text>
        <Text style={styles.infoText}>Copyright © {new Date().getFullYear()} flamintouch</Text>
        <Text style={styles.infoText}>Last Updated: {new Date().toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 100,
    height: 100,
    margin: 'auto',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoSection: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
