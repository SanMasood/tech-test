import React, {useState} from 'react';

import '../styles/Search.css'


const Search = () => {
return (
    
    <div className="Search">
        <img src="https://lofrev.net/wp-content/photos/2014/09/Nasa-logo-3D.gif" className="nasa-logo" alt="NASA-logo"/>
        <input className="search-text" type="text" />
    </div>
)
}

export default Search;