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

  refreshSection: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  refreshText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    marginRight: 5,
  },

  listTitle: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    color: '#333',
  },
});

export default styles;
