import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { NavLink } from 'react-router-dom'

function Nav({onSearch}){
    return(
        <div>
            <NavLink to='/home'>
                <span>Home</span>
            </NavLink>
            <NavLink to='/about'>
                <span>About</span>
            </NavLink>
            <NavLink to='/favorites'>
                <span>Favorites</span>
            </NavLink>
            <SearchBar onSearch={onSearch}/>
            
        </div>
    )
}

export default Nav