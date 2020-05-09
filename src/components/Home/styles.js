import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: Constants.statusBarHeight,
    paddingTop: 20,
    paddingLeft: 10,
  },

  listTitle: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    color: '#333',
  },
});

export default styles;
