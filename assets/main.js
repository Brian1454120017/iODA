import { StyleSheet } from 'react-native';

const externalStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555454',
  },


  sidebarToggleWrap: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'center',
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 5,
    margin: 10,
  },

  sideBarToggle: {
    fontSize: 14,
    padding: 10,
    color: '#ff0000',
  },


  sideBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#fff',
    width: '70%',
    padding: 10,
    zIndex: 1,
  },


  signUpLinkWrap: {
    marginTop: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },

  tabBar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 50,
    margin: 'auto',
    marginBottom: 10,
    paddingVertical: 9,
    paddingHorizontal: 9,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
  },

  active:{
    alignItems: 'center',
    backgroundColor: '#ff0000',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
  },

  tabIcon: {
    color: '#ff0000',
  },

tabIconActive: {
  color: '#fff',
},

});

export default externalStyles;
