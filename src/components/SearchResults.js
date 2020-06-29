import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';
//import { returned } from '../requests/getImages'

const SearchResults = ( {searchResults} ) => {
    //console.log(returned);
    console.log("Hello")

return (   

    <div className="SearchResults">
        <div className="test">
            {
                searchResults.map((image) => {
                return (
                <div key = {image.url} className="innerSearchResult">
                <img src={image.url} alt= "mockAlt" className="card-photo" />
                
                <figcaption className="caption">{image.title}</figcaption>
                </div>

                )
            })
        }
                 
        </div>
    
    </div>

)
    
}
SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
}

export default SearchResults;