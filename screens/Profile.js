import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is installed for the menu icon
import externalStyles from '../assets/main';

const MainScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isMoreOptionsVisible, setMoreOptionsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleMoreOptions = () => {
    setMoreOptionsVisible(!isMoreOptionsVisible);
  };

  const handleRedirectToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>

        {/* Menu Icon */}
        <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
          <Ionicons name="menu" size={24} color='#ff0000' />
        </TouchableOpacity>

        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <Image source={require('../assets/logo.png')} style={styles.logo} />
        
      
      </View>
      
      {/* Slide Sidebar */}
      {isSidebarVisible && (
        <View style={styles.slideSidebar}>
          <TouchableOpacity style={styles.closeIcon} onPress={toggleSidebar}>
            <Ionicons name="close" size={24} color='#ff0000' />
          </TouchableOpacity>
          <View style={styles.sidebarContent}>
            <Text>Sidebar Content Goes Here</Text>
          </View>
        </View>
      )}


      {/* Profile Content */}
      <View style={styles.profileContent}>
        <Text style={styles.profileHeading}>My Profile</Text>
        <Text>Profile information goes here...</Text>
      </View>

      {/* Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Other Content Goes Here</Text>
      </View>
      
     {/* Tab Navigation */}
     <View style={externalStyles.tabBar}>
        <TouchableOpacity onPress={handleRedirectToHome} style={externalStyles.tab}>
          <Ionicons name="home" size={22}  style={externalStyles.tabIcon} />
          {/* <Text>Home</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={externalStyles.tab}>
          <Ionicons name="cube" size={22}  style={externalStyles.tabIcon} />
          {/* <Text>Products</Text> */}
        </TouchableOpacity>

        <TouchableOpacity style={externalStyles.tab}>
          <Ionicons name="cart" size={22}  style={externalStyles.tabIcon} />
          {/* <Text>Cart</Text> */}
        </TouchableOpacity>

        <TouchableOpacity onPress={''} style={externalStyles.active}>
          <Ionicons name="person" size={24}  style={externalStyles.tabIconActive} />
          {/* <Text style={externalStyles.active}>Profile</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
 
  menuIcon: {
    padding: 10,
    color: '#ff0000',
  },
 
  slideSidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#DDE6FF',
    width: '70%',
    padding: 10,
    zIndex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },


  sidebarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

});

export default MainScreen;
