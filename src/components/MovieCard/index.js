import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function MovieCard({ movie, handleSelectMovie }) {
  return (
    <View style={styles.movie}>
      <TouchableOpacity
        style={styles.posterWrapper}
        activeOpacity={0.7}
        onPress={() => handleSelectMovie(movie)}
      >
        <Image
          style={styles.poster}
          source={{
            uri: movie.Poster,
          }}
        />
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
