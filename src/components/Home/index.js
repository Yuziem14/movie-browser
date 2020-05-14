import React from 'react';
import { View, ScrollView, Text, Alert, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { getWords } from '../../generators/words/wordsGenerator';
import requestMovies from '../../services/movies';

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

  loadMovies = async (numberOfWords) => {
    const words = getWords(numberOfWords);

    try {
      const requestedMovies = await requestMovies(words);
      this.props.setMovies('movies', requestedMovies);
    } catch (error) {
      console.warn(error);
      Alert.alert(
        'Whoops!',
        'Not possible to get some movies now, sorry. Try Another time.'
      );
    }
  };

  async componentDidMount() {
    if (this.props.movies.length > 0) return;

    await this.loadMovies(4);
  }

  render() {
    const todayList = this.props.movies.slice(
      0,
      Math.floor(this.props.movies.length / 2)
    );

    const moreList = this.props.movies.slice(
      Math.floor(this.props.movies.length / 2)
    );

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.refreshSection}
          onPress={async () => await this.loadMovies(4)}
        >
          <Text style={styles.refreshText}>Refresh List</Text>
          <MaterialIcons name='refresh' size={20} color={'#157EFB'} />
        </TouchableOpacity>
        <ScrollView>
          <View>
            <Text style={styles.listTitle}>Today's List</Text>
            <MovieList
              movies={todayList}
              handleSelectMovie={this.props.handleSelectMovie}
            />
          </View>
          <View>
            <Text style={styles.listTitle}>More Movies</Text>
            <MovieList
              movies={moreList}
              handleSelectMovie={this.props.handleSelectMovie}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
