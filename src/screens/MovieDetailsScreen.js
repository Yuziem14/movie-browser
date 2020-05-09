import React from 'react';
import PropTypes from 'prop-types';

import MovieDetails from '../components/MovieDetails';

function MovieDetailsScreen({ navigation }) {
  const movie = navigation.getParam('movie');

  return <MovieDetails movie={movie} />;
}

MovieDetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default MovieDetailsScreen;
