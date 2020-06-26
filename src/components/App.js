import React, { useState } from 'react';

import Search from './Search';
import SearchResults from './SearchResults';
import logoImage from '../assets/nasa-icon-png-7.png'

import '../styles/App.css';
import '../styles/Search.css'
import '../styles/SearchResults.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  //searchResults.map((e)=> console.log(e));
  


  return (
    <div className="App">
       <img src={logoImage} data-testid="logo-id" className="nasa-logo" alt="NASAlogo"/>
       
        <Search setSearchResults = { setSearchResults }/>

        <div className="search-results">
          {
                   
           (searchResults && searchResults.length > 0)?
           searchResults.map(image => <SearchResults image = {image} /> ):
           <div><h2 className="results-text">No results yet.</h2></div>              
           
          }
        </div>
       
    </div>
  );
}



export default App;
