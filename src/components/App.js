import React, { useState } from 'react';

import Search from './Search';
import SearchResults from './SearchResults';
import getImages from '../requests/getImages'
import '../styles/App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  //console.log(SearchResults);


  return (
    <div className="App">
        <Search setSearchResults = { setSearchResults }/>
        <SearchResults  />
       
    </div>
  );
}


export default App;
