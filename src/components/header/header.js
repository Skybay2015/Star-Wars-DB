import React from 'react';
import classes from './header.module.sass'
import NavList from './NavList/NavList';

const Header = props => {
    return (
        <div className={classes.Header}>
            <div className='container d-flex'>
                <h1>Star DB</h1>
                <nav>
                    <NavList/>
                </nav>
            </div>
        </div>
    );
}

export default Header;
