import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.module.css'
import s from './Navbar.module.css'

// let classes = {
//     'nav':'Navbar_nav__3ou9Q',
//     'item':'Navbar_item__3qaF3'
//     'active': 'sdfsdfsdf_active'
// }
//     let c1 = 'item';
//     let c2 = 'active';
//     let classes = c1 + " " + c2;            выдаст  "item active"    (""  -это пробел )
//     let classesNew = `${s.item} ${c2}`;
//
// let Обекты = {
//     'ключ':'значение',
//     'ключ':'значение'
// }

function Navbar() {
    return(
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='profile' activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='News' activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to='Music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to='Settings' activeClassName={s.activeLink}>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;