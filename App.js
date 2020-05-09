import React from 'react';
import Routes from './src/routes';

import { search } from './mockData';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: search.Search,
      search: search.Search,
    };
  }

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
        }}
      />
    );
  }
}
