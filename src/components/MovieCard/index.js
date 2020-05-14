import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import noPoster from '../../assets/poster_placeholder.png';

function MovieCard({ movie, handleSelectMovie }) {
  const poster = movie.Poster === 'N/A' ? noPoster : { uri: movie.Poster };

  return (
    <View style={styles.movie}>
      <TouchableOpacity
        style={styles.posterWrapper}
        activeOpacity={0.7}
        onPress={() => handleSelectMovie(movie.imdbID)}
      >
        <Image style={styles.poster} source={poster} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.infoText}>{movie.Title}</Text>
        <Text style={styles.infoText}>{movie.Year}</Text>
      </View>
    </View>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  handleSelectMovie: PropTypes.func.isRequired,
};

export default MovieCard;
