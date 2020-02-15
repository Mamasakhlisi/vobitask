import React from 'react';
import {Link} from 'react-router-dom';
import scss from './style/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={scss.nav}>
          <ul className={scss.nav__links}>
            <li><Link to="/">მთავარი</Link></li>
          </ul>  
        </nav>
    )
}

export default Navbar
