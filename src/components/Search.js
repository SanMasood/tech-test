import React, {useState} from 'react';
import PropTypes from 'prop-types';

import getImages from '../requests/getImages';
import '../styles/Search.css'
import logoImage from '../assets/Nasa-logo-3D.gif'
//import SearchResults from './SearchResults';



const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false); 


    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();//stops browser reloading
        setSearchResults(await getImages(value));
        setIsLoading(false);
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
Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
}

export default Search;