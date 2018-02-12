import React, { Component } from 'react';
import { StatusBar, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container } from '../components/Container';
import { BkgImage } from '../components/Image';
import { Button } from '../components/Button';

ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'; 
ICON_COLOR = 'white'; 
ICON_SIZE = 32; 

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <BkgImage />
    <Button
      onPress={() => console.log('find beer search tab')}
      text="Find Beers"
      customIcon={<Ionicons name={`${ICON_PREFIX}-beer`} size={ICON_SIZE} color={ICON_COLOR} />}
    />
  </Container>
);
