import React, { Component } from 'react';
import { StatusBar, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container } from '../components/Container';
import { BkgImage } from '../components/Image';
import { Button } from '../components/Button';

ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'; 
ICON_COLOR = 'white'; 
ICON_SIZE = 32; 

class Home extends Component {
  
  handlePressSearchBeers = () => {
    console.log('go and search beers');
    //TODO: this.props.navigation.navigate('SearchTabNavigator'); 
  }
  
  render() {
    return (
      <Container>
       <StatusBar translucent={false} barStyle="light-content" />
       <BkgImage />
       <Button
          onPress={this.handlePressSearchBeers}
          text="Find Beers"
          customIcon={<Ionicons name={`${ICON_PREFIX}-beer`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
      </Container>
    );
  }
}

export default Home;