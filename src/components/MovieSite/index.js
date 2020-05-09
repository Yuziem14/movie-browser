import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import styles from './styles';

function MovieSite({ navigation }) {
  const url = navigation.getParam('url');

  return <WebView style={styles.container} source={{ uri: url }} />;
}

MovieSite.propTypes = {
  navigation: PropTypes.object.isRequired,
};
