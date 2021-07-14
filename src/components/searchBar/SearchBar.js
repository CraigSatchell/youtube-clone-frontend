import React from 'react';
import './SearchBar.css';
import CurrentVideo from '../../App';


const SearchBar = (props) => {
    const filteredVideos = props.searchText.length === 0 

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
        <CurrentVideo video={filteredVideos}/>
        </div>
    )
}

export default SearchBar
    