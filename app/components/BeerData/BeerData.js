import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles'

const BeerData = ({ beerdata, addToFavorites }) => (
  <Content>
    <List style={styles.list}>
      <ListItem itemDivider>
        <Text>Name</Text>
      </ListItem>
      <ListItem style={styles.nameAndFavorites}>
        <View>
          <Text>{beerdata.name}</Text>
        </View>
        <View>
          <Button onPress={() => addToFavorites(beerdata.name)} title="+ Favorites" />
        </View>
      </ListItem>
      <ListItem itemDivider>
        <Text>Category</Text>
      </ListItem>
      <ListItem>
        <Text>{beerdata.style.category.name}</Text>
      </ListItem>
      <ListItem itemDivider>
        <Text>Description</Text>
      </ListItem>
      <ListItem>
        <Text>{beerdata.description}</Text>
      </ListItem>
      <ListItem itemDivider>
        <Text>Rating</Text>
      </ListItem>
      <ListItem>
        <Text>{beerdata.abv}</Text>
      </ListItem>
      <ListItem itemDivider>
        <Text>Organic</Text>
      </ListItem>
      <ListItem>
        <Text>{beerdata.isOrganic}</Text>
      </ListItem>
      <ListItem itemDivider>
        <Text>Availability</Text>
      </ListItem>
      <ListItem>
        <Text>{beerdata.available.description ? beerdata.available.description : 'No info available'}</Text>
      </ListItem>
    </List>
  </Content>
);

BeerData.propTypes = {
  beerdata: PropTypes.object.isRequired,
  addToFavorites: PropTypes.func.isRequired
};

export default BeerData;