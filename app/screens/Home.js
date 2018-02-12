import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';


export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Text>This is the home screen with container component</Text>
  </Container>
);
