import React from 'react';
import { Alert } from 'react-native';

import { requestMovieById } from './src/services/movies';
import Routes from './src/routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: [],
    };
  }

  handleSelectMovie = async (id, navigation) => {
    try {
      const movie = await requestMovieById(id);
      navigation.push('MovieDetails', { movie });
    } catch (error) {
      console.warn(error);
      Alert.alert(
        'Whoops!',
        'Not possible to get some movies now, sorry. Try Another time.'
      );
    }
  };

  setMovies = (key, movies) => {
    this.setState((prevState) => ({ ...prevState, [key]: movies }));
  };

  render() {
    return (
      <Routes
        screenProps={{
          movies: this.state.movies,
          search: this.state.search,
          setMovies: this.setMovies,
          handleSelectMovie: this.handleSelectMovie,
        }}
      />
    );
  }
}
