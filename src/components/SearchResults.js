import React, {useState} from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ( { image } ) => {
return (
    <div className="SearchResults">

            <img src={image} 
            alt="mockAlt"
            className="card-photo"
            />        
    
    </div>
)
}
SearchResults.propTypes = {
    image: PropTypes.string.isRequired,
}

export default SearchResults;