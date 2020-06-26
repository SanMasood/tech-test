import React, {useState} from 'react';
import '../styles/SearchResults.css'
import { fireEvent } from '@testing-library/react';

const SearchResults = ( { image } ) => {
return (
    <div className="SearchResults">
          <figure className="images">

            <img src={image} 
            alt="queryPhoto"
            className="card-photo"
            />
            
            </figure>

               
    
    </div>
)
}

export default SearchResults;