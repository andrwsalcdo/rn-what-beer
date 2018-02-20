import React, { Component } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { Container, Content, ListItem } from 'native-base'; 

import { SAMPLE_FAVS } from '../data/sampleData'; 

class Favorites extends Component {
  
  static navigationOptions = {
    headerTitle: 'Favorites'
  }
  
  render() {
    return (
      <Container style={styles.view}>
          <Content>
            <FlatList
              data={SAMPLE_FAVS}
              renderItem={({ item }) => (
                  <ListItem>
                    <Text>{item.name}</Text>
                  </ListItem>
              )}
              keyExtractor={(item) => item.name}
            />
          </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default Favorites;