import React from 'react';
import PropTypes from 'prop-types';

import Search from '../components/Search';

function SearchScreen({ navigation, screenProps }) {
  function handleSelectMovie(movie) {
    navigation.push('MovieDetails', { movie });
  }

  return (
    <Search
      movies={screenProps.search}
      setMovies={screenProps.setMovies}
      handleSelectMovie={handleSelectMovie}
    />
  );
}

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default SearchScreen;
