import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import MovieList from '../MovieList';

import styles from './styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    movies: PropTypes.array.isRequired,
    handleSelectMovie: PropTypes.func.isRequired,
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
                value='Star Wars'
              />
              <TouchableOpacity style={styles.icon} activeOpacity={0.5}>
                <MaterialIcons name='search' color='#157EFB' size={30} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.results}>
            <Text style={styles.resultText}>
              <Text style={[styles.resultText, styles.resultCount]}>
                {this.props.movies.length}
              </Text>{' '}
              results for "Star Wars"
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
