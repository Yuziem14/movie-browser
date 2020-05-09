import React from 'react';
import { View, ScrollView, Text, Image, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import { movie as mock } from '../../../mockData';

import styles from './styles';

function MovieDetails({ movie }) {
  const isApproved = Number(mock.imdbRating) >= 7.0;

  const ratingColor = isApproved ? '#2ECC71' : '#E74C3C';
  const ratingIcon = isApproved ? 'thumb-up' : 'thumb-down';

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={{ uri: movie.Poster }}
          blurRadius={5.5}
          style={styles.posterSection}
        >
          <View style={styles.posterWrapper}>
            <Image source={{ uri: movie.Poster }} style={styles.poster} />
          </View>
        </ImageBackground>

        <View style={styles.infoSection}>
          <View style={styles.infoHeader}>
            <Text style={styles.headerText}>{movie.Title}</Text>
            <Text style={styles.headerText}>{mock.Released}</Text>

            <View style={styles.rating}>
              <MaterialIcons name={ratingIcon} color={ratingColor} size={28} />
              <Text style={[styles.ratingText, { color: ratingColor }]}>
                {mock.imdbRating}
              </Text>
            </View>
          </View>

          <View style={styles.body}>
            <Text style={[styles.bodyText, styles.plotText]}>{mock.Plot}</Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Runtime: </Text>
              {mock.Runtime}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Genre: </Text>
              {mock.Genre}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Casting: </Text>
              {mock.Actors}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Director: </Text>
              {mock.Director}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Writer: </Text>
              {mock.Writer}
            </Text>
            <Text style={styles.bodyText}>
              <Text style={styles.describeText}>Country: </Text>
              {mock.Country}
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
