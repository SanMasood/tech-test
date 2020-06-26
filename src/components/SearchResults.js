import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ( { image } ) => {
    /*if (!image.length){
        return 
    }
    else{*/

return (
    

    <div className="SearchResults">
        <div className="test">

            <img src={image} 
            alt="mockAlt"
            className="card-photo"
            />        
        </div>
    
    </div>

)
    
}
SearchResults.propTypes = {
    image: PropTypes.string.isRequired,
}

export default SearchResults;