import React from 'react';
import './NavBar.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div className='navBar_item'>
                <NavLink to='/' activeClassName='active'>Pokemon</NavLink>
            </div>
            <div className='navBar_item'>
                <NavLink to='favorites' activeClassName='active'>My Pokemon</NavLink>
            </div>
        </nav>
    );
}

export default NavBar