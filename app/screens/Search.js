import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Search = () => (
    <View style={styles.view}>
        <Text>Search Screen</Text>
    </View>
); 

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Search; 