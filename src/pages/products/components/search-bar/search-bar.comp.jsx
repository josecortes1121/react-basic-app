import React from 'react';

import './search-bar.style.css'

const SearchBar = () => {
    return (
        <div className="search-bar-container">            
            <div>
            <input type="text" placeholder="Search.." className="search-input"/>
            </div>
            <div>
            <input type="checkbox"/>only show products in stock
            </div>
        </div>
    );
} 

export default SearchBar;