import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  movie: {
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
  },

  posterWrapper: {
    width: 135,
    height: 212,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: '#f4f4f4',
  },

  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },

  info: {
    flex: 1,
    width: 135,
    backgroundColor: '#157EFB',
    borderRadius: 4,
    padding: 10,
    marginTop: 6,
  },

  infoText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    textAlign: 'center',
    color: '#f4f4f4',
    paddingBottom: 2,
  },
});

export default styles;
