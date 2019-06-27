import React from 'react';
import classes from './NavList.module.sass'
import {NavLink} from 'react-router-dom'

const NavList = (props) => {
    const navLists = [
        {
            label: 'People',
            link: '/'
        },
        {
            label: 'Planets',
            link: '/planets'
        },
        { 
            label: 'Starships',
            link: '/starships'
        },
    ];
    return (
        <ul className={classes.NavList}>
            {navLists.map((item, index) => {
                return (
                    <li key={item.label + index}>
                        <NavLink to={item.link}>{item.label}</NavLink>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavList;
