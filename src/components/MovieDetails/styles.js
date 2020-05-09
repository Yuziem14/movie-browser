import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginTop: Constants.statusBarHeight,
  },

  posterSection: {
    minHeight: 370,
    alignItems: 'center',
    justifyContent: 'center',
  },

  posterWrapper: {
    width: 203,
    height: 318,
    borderRadius: 8,
    elevation: 8,
  },

  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },

  infoSection: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },

  infoHeader: {
    alignItems: 'center',
  },

  headerText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    color: '#157EFB',
    lineHeight: 30,
  },

  body: {
    marginTop: 20,
  },

  bodyText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
    marginVertical: 5,
  },

  describeText: {
    fontFamily: 'Montserrat-SemiBold',
  },

  plotText: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 18,
    textAlign: 'justify',
    marginVertical: 0,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  ratingText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default styles;
