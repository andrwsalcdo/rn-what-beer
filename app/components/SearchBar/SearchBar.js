import React from 'react';
import { Header, Icon, Item, Input } from 'native-base';
import PropTypes from 'prop-types';

const SearchBar = ({ onChangeText, beerSearch }) => (
  <Header searchBar rounded>
    <Item>
      <Icon name="search" />
      <Input
        placeholder="Enter beer name"
        returnKeyType="search"
        onChangeText={onChangeText}
        onSubmitEditing={beerSearch}
      />
    </Item>
  </Header>
);


SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  beerSearch: PropTypes.func.isRequired
};


export default SearchBar;