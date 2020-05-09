import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import LoadingScreen from './screens/LoadingScreen';

const MoviesStack = createStackNavigator(
  {
    Movies: HomeScreen,
    MovieDetails: MovieDetailsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Movies',
  }
);

MoviesStack.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <MaterialCommunityIcons
      name={`movie${focused ? '' : '-outline'}`}
      color={tintColor}
      size={24}
    />
  ),
};

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    MovieDetails: MovieDetailsScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Search',
  }
);

SearchStack.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <MaterialIcons name='search' color={tintColor} size={24} />
  ),
};

const AppTabs = createBottomTabNavigator(
  {
    Movies: MoviesStack,
    Search: SearchStack,
  },
  {
    initialRouteName: 'Movies',
    tabBarOptions: {
      activeTintColor: '#157EFB',
      inactiveTintColor: '#333',
      labelStyle: {
        fontSize: 14,
        marginBottom: 2,
      },
    },
  }
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppTabs,
    Loading: LoadingScreen,
  },
  {
    initialRouteName: 'Loading',
  }
);

function Routes({ screenProps }) {
  return <AppNavigator screenProps={screenProps} />;
}

Routes.propTypes = {
  screenProps: PropTypes.object.isRequired,
};

export default Routes;
