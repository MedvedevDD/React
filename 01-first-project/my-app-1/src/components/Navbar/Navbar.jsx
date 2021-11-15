import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./FriendsContainer";

const Navbar = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/Profile" activeClassName={s.activelink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Dialogs" activeClassName={s.activelink}>Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/Users" activeClassName={s.activelink}>Users</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/News" activeClassName={s.activelink}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Music" activeClassName={s.activelink}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/Settings" activeClassName={s.activelink}>Settings</NavLink>
                </div>
            </nav>
            <div className={s.nav}>
                <h3>My FRIENDS</h3>
                <FriendsContainer/>
            </div>

        </div>
    )
}
export default Navbar;