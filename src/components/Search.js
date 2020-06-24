import React, {useState} from 'react';

import getImages from '../requests/getImages';
import '../styles/Search.css'
import logoImage from '../assets/Nasa-logo-3D.gif'



const Search = () => {
    const [value, setValue] = useState('');

    const handleSubmit= (event) => {
        event.preventDefault();
        getImages(value);
    }

return (
    
    <div className="Search">
        <img src={logoImage} data-testid="logo-id" className="nasa-logo" alt="NASAlogo"/>

        <form className="input-form" onSubmit={handleSubmit}>Search: 
        <input className="search-text" type="text" onChange={(e)=>setValue(e.target.value)}/>

        <button type="submit" className="search-button">Go!</button>

        </form>
    </div>
)
}

export default Search;