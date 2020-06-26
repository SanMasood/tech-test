import React, { useState } from 'react';

import Search from './Search';
import SearchResults from './SearchResults';
import '../styles/App.css';
import '../styles/Search.css'
import '../styles/SearchResults.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  searchResults.map((e)=> console.log(e));


  return (
    <div className="App">
        <Search setSearchResults = { setSearchResults }/>

        <div className="search-results">
          {
           (searchResults && searchResults.length > 0) &&
           searchResults.map(image => <SearchResults image = {image} /> )
           
           
          }
        </div>
       
    </div>
  );
}


export default App;
