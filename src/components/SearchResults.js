import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ( { image } ) => {

return (
    

    <div className="SearchResults">
        <div className="test">

            <img src={image} data-testid="image-id"
            alt="mockAlt"
            className="card-photo"
            />        
        </div>
    
    </div>

)
    
}
SearchResults.propTypes = {
    image: PropTypes.func.isRequired,
}

export default SearchResults;