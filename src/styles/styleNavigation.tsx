// styleNavigation.js

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  drawerContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 25,
    marginLeft: 12,
    marginRight: 10,
    elevation: 0,
    height: width * 0.28,
    paddingBottom: width * 0.03,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 40,
    backgroundColor: 'transparent',
  },
  tabBarIconStyle: {
    marginBottom: 2,
    width: width * 0.20,
    height: width * 0.20,
  },
  tabBarBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: 40,
  },
  iconContainer: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: width * 0.22,
    height: width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInnerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    width: width * 0.20,
    height: width * 0.20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: width * 0.1,
    height: width * 0.1,
    resizeMode: 'contain',
  },
});

export default styles;