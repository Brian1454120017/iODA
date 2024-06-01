import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is installed for the menu icon

const MainScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleRedirectToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        
        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Find products faster..."
          placeholderTextColor="#666"
        />

   
        
        {/* Menu Icon */}
        <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
          <Ionicons name="menu" size={24} color='#2d448b' />
        </TouchableOpacity>
      </View>
        

      {/* Slide Menu */}
      {isMenuVisible && (
        <View style={styles.slideMenu}>
          <TouchableOpacity style={styles.closeIcon} onPress={toggleMenu}>
            <Ionicons name="close" size={24} color='#2d448b' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text>Restaurant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text>Takeaway</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text>Cafe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text>Pub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text>Grill or Bar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Content Goes Here</Text>
      </View>
      
      {/* Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.active}>
          <Text >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text>Others</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRedirectToProfile} style={styles.tab}>
          <Text>Profile</Text>
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
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    borderColor: '#2d448b',
    borderWidth: 1,
  },
  menuIcon: {
    padding: 10,
    color: '#2d448b',
  },
  slideMenu: {
    position: 'absolute',
    top: 10,
    right: 0,
    backgroundColor: '#DDE6FF',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
    width: 200,
  },

  slideMenuTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2d448b',
  },

  menuOption: {
    padding: 10,
  },

  slideSidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#f2f2f2',
    width: '70%',
    padding: 10,
    zIndex: 1,
  },

  sidebarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    padding: 10,
    color: '#2d448b',
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  active:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2d448b',
    color: '#ffffff',
    paddingVertical: 10,
  },
});

export default MainScreen;
