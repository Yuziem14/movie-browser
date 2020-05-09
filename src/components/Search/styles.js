import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: Constants.statusBarHeight,
    paddingTop: 20,
  },

  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputGroup: {
    width: '80%',
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  input: {
    width: '85%',
    fontFamily: 'Montserrat',
    color: '#f4f4f4',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },

  icon: {
    paddingRight: 10,
  },

  results: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },

  resultText: {
    fontFamily: 'Montserrat',
    fontSize: 24,
    color: '#333',
    marginBottom: 5,
  },

  resultCount: {
    color: '#157EFB',
  },
});

export default styles;
