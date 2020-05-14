import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import requestMovies from '../../services/movies';

import MovieList from '../MovieList';

import styles from './styles';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      resultsFor: '',
    };
  }

  static propTypes = {
    movies: PropTypes.array.isRequired,
    handleSelectMovie: PropTypes.func.isRequired,
  };

  handleSearchChange = (text) => {
    this.setState((prevState) => ({ ...prevState, searchInput: text }));
  };

  handleOnPress = async () => {
    try {
      const requestedMovies = await requestMovies(
        [this.state.searchInput],
        false
      );

      this.setState(
        (prevState) => ({ ...prevState, resultsFor: this.state.searchInput }),
        () => {
          this.props.setMovies('search', requestedMovies);
        }
      );
    } catch (error) {
      console.warn(error);
      Alert.alert(
        'Whoops!',
        'Not possible to get some movies now, sorry. Try Another time.'
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.form} behavior='height'>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder='Search Movie'
                value={this.state.searchInput}
                onChangeText={this.handleSearchChange}
              />
              <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.5}
                onPress={this.handleOnPress}
              >
                <MaterialIcons name='search' color='#157EFB' size={30} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.results}>
            <Text style={styles.resultText}>
              <Text style={[styles.resultText, styles.resultCount]}>
                {this.props.movies.length}
              </Text>{' '}
              results for "{this.state.resultsFor}"
            </Text>
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

export default Search;
