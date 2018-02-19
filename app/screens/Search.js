import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import SearchBar from '../components/SearchBar'; 
import { BeerData } from '../components/BeerData'; 
  
import SAMPLE_BEER_DATA from '../data/sampleData'; 


class Search extends Component {

  handleSearchText = (e) => {
    console.log("typing search", e)
    //todo: dispatch action -> reducer 
  }

  beerSearch = () => {
    console.log('beer searched')
    //todo: dispatch action -> saga -> return api data -> reducer
  }
  
  handleAddFavorites = (beerName) => {
    console.log('add fav', beerName);
    // todo: dispatch action -> reducer
  } 

  render() {
    return (
         <Container>
           <SearchBar 
              onChangeText={this.handleSearchText}
              beerSearch={this.beerSearch}
           />
           
           <Content>
             <BeerData 
                beerdata={SAMPLE_BEER_DATA} 
                addToFavorites={this.handleAddFavorites}
              />
           </Content>

         </Container>
    );
  }
}


export default Search;