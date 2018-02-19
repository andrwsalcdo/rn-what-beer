import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SearchBar from '../components/SearchBar'; 
  

class Search extends Component {

  handleSearchText = (e) => {
    console.log("typing search", e)
    //todo: dispatch action -> reducer 
  }

  beerSearch = () => {
    console.log('beer searched')
    //todo: dispatch action -> saga -> return api data -> reducer
  }
  

  render() {
    return (
         <Container>
           <SearchBar 
              onChangeText={this.handleSearchText}
              beerSearch={this.beerSearch}
           />
           
           <Content>
           </Content>

         </Container>
    );
  }
}


export default Search;