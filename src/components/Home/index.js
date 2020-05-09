import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

import MovieList from '../MovieList';

import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    movies: PropTypes.array.isRequired,
    setMovies: PropTypes.func.isRequired,
    handleSelectMovie: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.listTitle}>Today's List</Text>
            <MovieList
              movies={this.props.movies}
              handleSelectMovie={this.props.handleSelectMovie}
            />
          </View>
          <View>
            <Text style={styles.listTitle}>More Movies</Text>
            <MovieList
              movies={this.props.movies}
              handleSelectMovie={this.props.handleSelectMovie}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
