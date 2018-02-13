import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

const FooterTabs = (props) => (
  <Footer>
    <FooterTab>
      <Button
        vertical
        active={props.navigationState.index === 0}
        onPress={() => props.navigation.navigate('Search')}
      >
        <Icon name="beer" />
        <Text>Search</Text>
      </Button>
      <Button
        vertical
        active={props.navigationState.index === 1}
        onPress={() => props.navigation.navigate('Favorites')}
      >
        <Icon name="star" />
        <Text>Favorites</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default FooterTabs;
