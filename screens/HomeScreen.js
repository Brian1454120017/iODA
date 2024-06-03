import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Title } from 'react-native-paper';
import externalStyles from '../assets/main';

const MainScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleRedirectToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleRedirectToAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Logo */}
      {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
      
      {/* Header */}
      <View style={styles.header}>
          {/* Menu Icon */}
          <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
            <Ionicons name="menu" size={24} color='#ff0000' />
          </TouchableOpacity>

          <Text style={externalStyles.title}>Home</Text>
        
         {/* Menu Icon */}
         <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
            <Ionicons name="options" size={24} color='#ff0000' />
         </TouchableOpacity>
      
      </View>

      <View style={styles.searchWrap}>
          {/* Search Input */}
        <TextInput
              style={styles.searchInput}
              placeholder="Find products faster..."
              placeholderTextColor="#666"
          />
      </View>

       {/* Slide Sidebar */}
       {isSidebarVisible && (
        <View style={externalStyles.sideBar}>
          <TouchableOpacity style={styles.closeIcon} onPress={toggleSidebar}>
            <Ionicons name="close" size={24} color='#ff0000' />
          </TouchableOpacity>
          <View>
            <Text style={externalStyles.title}>Menu</Text>
          </View>
          <View style={externalStyles.sideBarToggleWrap}>
            <TouchableOpacity>
              <Text style={externalStyles.sideBarToggle}>Resturants</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={externalStyles.sideBarToggle}>Takeaway</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={externalStyles.sideBarToggle} >Cafe</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={externalStyles.sideBarToggle}>Pub N Grill</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={externalStyles.sideBarToggle}>Bar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
          

      {/* Slide Menu */}
      {isMenuVisible && (
        <View style={styles.slideMenu}>
          <TouchableOpacity style={styles.closeIcon} onPress={toggleMenu}>
            <Ionicons name="close" size={24} color='#ff0000' />
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.menuOption}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.menuOption}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRedirectToAbout}>
            <Text style={styles.menuOption}>About</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Content Goes Here</Text>
      </View>
      
      {/* Tab Navigation */}
      <View style={externalStyles.tabBar}>
        <TouchableOpacity style={externalStyles.active}>
          <Ionicons name="home" size={24} style={externalStyles.tabIconActive} />
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

        <TouchableOpacity onPress={handleRedirectToProfile} style={externalStyles.tab}>
          <Ionicons name="person" size={22}  style={externalStyles.tabIcon} />
          {/* <Text>Profile</Text> */}
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
    paddingTop: 10,
    paddingBottom: 5,
    margin: 10,
  },

  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  searchWrap: {
    width: '100%',
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  searchInput: {
    width: '80%',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderColor: '#ff0000',
    borderWidth: 1,
    fontSize: 13,
  },

  menuIcon: {
    padding: 10,
    color: '#ff0000',
  },

  menuOption: {
    padding: 10,
    color: '#ff0000',
  },

  slideMenu: {
    position: 'absolute',
    top: 10,
    right: 0,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
    width: 130,
  },

  slideMenuTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ff0000',
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


  closeIcon: {
    padding: 10,
    color: '#ff0000',
  },

});

export default MainScreen;
