import React from 'react';
import PropTypes from 'prop-types';

import Home from '../components/Home';

function HomeScreen({ navigation, screenProps }) {
  function handleSelectMovie(movie) {
    navigation.push('MovieDetails', { movie });
  }

  return (
    <Home
      movies={screenProps.movies}
      setMovies={screenProps.setMovies}
      handleSelectMovie={handleSelectMovie}
    />
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default HomeScreen;
