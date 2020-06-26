import React, {useState} from 'react';
import PropTypes from 'prop-types';

import getImages from '../requests/getImages';
import '../styles/Search.css'

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

        <form className="input-form" onSubmit={handleSubmit}>Search: 
        <input className="search-text" type="text" onChange={(e)=>setValue(e.target.value)}/>

        <button type="submit" className="search-button">Go</button>

        </form>
        {
        isLoading && 
        <span className="loader"></span>
        }      
        
    </div>
);
}


Search.propTypes = {
    setSearchResults: PropTypes.func,
}

export default Search;