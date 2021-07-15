import React from 'react';
import './SearchBar.css';



const SearchBar = (props) => {
   //  const videoSearch = props.searchText.length === 0 

    return (
        <div>
        <div id='search-bar'>
            <form onSubmit={
                (event) => {
                    props.handleSearchSubmit(event)
                }
            }>
            <label>Search</label>
            <input type='text' name='search'
                onChange={props.handleSearchChange}
                value={props.searchText}
                placeholder='Title'></input>
            </form>
        </div>
          {/*<CurrentVideo video={videoSearch}/>*/}
        </div>
    )
}

export default SearchBar
    