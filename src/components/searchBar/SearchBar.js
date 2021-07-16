import React from 'react';
import './SearchBar.css';



const SearchBar = (props) => {

    return (
        <div>
        <div id='search-bar'>
            <form onSubmit={
                (event) => {
                    props.handleSearchSubmit(event)
                }
            }>
            <input type='text' name='search'
                onChange={props.handleSearchChange}
                value={props.searchText}
                placeholder='Search'></input>
            </form>
        </div>
        </div>
    )
}

export default SearchBar
    