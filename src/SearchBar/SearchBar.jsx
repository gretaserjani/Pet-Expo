import React, { useState } from 'react';
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa';


const SearchBar = ({setResults}) => {

    const [input, setInput] = useState('')

    const fetchData = (value) => {
        fetch('https://freetestapi.com/api/v1/dogs')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            const results = json.results.filter((dog) => {
             return dog && dog.name && dog.name.toLowerCase().includes(value)
            })
            setResults(results)
        })

    }

    const handleChange = (value) => {
          setInput(value)
          fetchData(value)
    }

    
return (
<>
    <div className='input-wrapper'>
    <FaSearch id='search-icon'></FaSearch>
    <input placeholder='Search animal' 
    value={input} 
    onChange={(e) => handleChange(e.target.value)}></input>
    </div>
    </>
)
};

export default SearchBar;





