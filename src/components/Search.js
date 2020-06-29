import React, {useState} from 'react';
import PropTypes from 'prop-types';

import getImages from '../requests/getImages';
import Loader from 'react-loader-spinner'

import '../styles/Search.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'


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

        <form className="input-form" onSubmit={handleSubmit}>
            <label>Search:
        <input className="search-text" type="text" onChange={(e)=>setValue(e.target.value)}/>
        </label>

        <button type="submit" className="search-button">Go</button>

        </form>
        {
        isLoading && 
        <Loader
         type="ThreeDots"
         color="red"
         height={60}
         width={60}
         timeout={7000}
        />
        
        }      
        
    </div>
);
}


Search.propTypes = {
    setSearchResults: PropTypes.func,
}

export default Search;