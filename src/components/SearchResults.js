import React, {useState} from 'react';
import getImages from '../requests/getImages';
import searchResults from './App'


const SearchResults = () => {
return (
    <div className="SearchResults">
        <p>
            {searchResults}
        <img src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
        alt="mockPhoto"
        className="card-photo"/>
            
        </p>
    </div>
)

}
export default SearchResults;