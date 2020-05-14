import React from 'react';
import { View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import noPoster from '../../assets/poster_placeholder.png';

import styles from './styles';

function MovieDetails({ movie }) {
  const poster = movie.Poster === 'N/A' ? noPoster : { uri: movie.Poster };
  const isApproved = Number(movie.imdbRating) || 0 >= 7.0;

  const ratingColor = isApproved ? '#2ECC71' : '#E74C3C';
  const ratingIcon = isApproved ? 'thumb-up' : 'thumb-down';

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={poster}
          blurRadius={5.5}
          style={styles.posterSection}
        >
          <View style={styles.posterWrapper}>
            <Image source={poster} style={styles.poster} />
          </View>
        </ImageBackground>

        <View style={styles.infoSection}>
          <View style={styles.infoHeader}>
            <Text style={styles.headerText}>{movie.Title}</Text>
            <Text style={styles.headerText}>{movie.Released}</Text>

            {movie.imdbRating && (
              <View style={styles.rating}>
                <MaterialIcons
                  name={ratingIcon}
                  color={ratingColor}
                  size={28}
                />
                <Text style={[styles.ratingText, { color: ratingColor }]}>
                  {movie.imdbRating}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.body}>
            <Text style={[styles.bodyText, styles.plotText]}>{movie.Plot}</Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Runtime: </Text>
              {movie.Runtime}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Genre: </Text>
              {movie.Genre}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Casting: </Text>
              {movie.Actors}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Director: </Text>
              {movie.Director}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Writer: </Text>
              {movie.Writer}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Country: </Text>
              {movie.Country}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
