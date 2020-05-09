import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';

import styles from './styles';

function MovieList({ movies, handleSelectMovie }) {
  function renderItem({ item }) {
    return <MovieCard movie={item} handleSelectMovie={handleSelectMovie} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(movie) => movie.imdbID}
      />
    </View>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  handleSelectMovie: PropTypes.func.isRequired,
};

export default MovieList;
