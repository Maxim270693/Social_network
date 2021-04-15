import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    isAuth:null | boolean
    login:null | string
    logout: () => void
}

function Header(props: PropsType) {
    return(
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'/>

            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;