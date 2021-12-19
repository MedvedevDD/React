import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
 // @ts-ignore
    return (
     <nav className={s.nav}>
         <div>
             <div className={s.item}>
                 <NavLink to="/Profile" >Profile</NavLink>
             </div>
             <div className={`${s.item} ${s.active}`}>
                 <NavLink to="/Dialogs">Messages</NavLink>
             </div>
             <div className={s.item}>
                 <NavLink to="/News">News</NavLink>
             </div>
             <div className={s.item}>
                 <NavLink to="/Music">Music</NavLink>
             </div>
             <div className={s.item}>
                 <NavLink to="/Settings">Settings</NavLink>
             </div>
         </div>
     </nav>
 )
}
export default Navbar;