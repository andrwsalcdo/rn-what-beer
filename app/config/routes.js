import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Favorites from '../screens/Favorites';
import FooterTabs from '../components/FooterTabs'; 

const SearchFavoriteTabs = TabNavigator(
  {
    Search: { screen: Search },
    Favorites: { screen: Favorites }
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => <FooterTabs {...props} />,
    animationEnabled: false,
    swipeEnabled: false
  }
);

// final routes
export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null
    }
  },
  SearchAndFavoritesTab: {
    screen: SearchFavoriteTabs
  }
});
