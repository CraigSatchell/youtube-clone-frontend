import React from 'react'
import SearchBar from '../searchBar/SearchBar';
import './Header.css';


const Header = (props) => {

   return (
      <div id='header'>
         <SearchBar handleSearchChange={props.handleSearchChange} setSearchText={props.setSearchText} searchText={props.searchText} handleSearchSubmit={props.handleSearchSubmit}/>
      </div>
   )
}

export default Header
