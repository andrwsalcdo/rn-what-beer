import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => (
  <View style={styles.view}>
    <Text>Favorites screen</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Favorites;