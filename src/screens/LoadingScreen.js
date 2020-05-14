import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { loadAsync } from 'expo-font';
import PropTypes from 'prop-types';

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  async _loadFonts() {
    const fonts = {
      Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Italic': require('../assets/fonts/Montserrat-Italic.ttf'),
      'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
      'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    };

    try {
      await loadAsync(fonts);
    } catch (err) {
      console.warn(err);
    }
  }

  async componentDidMount() {
    await this._loadFonts();
    this.setState((prevState) => ({ ...prevState, isLoaded: true }));
  }

  componentDidUpdate() {
    if (this.state.isLoaded) this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
