import React from "react";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let path = "/myFriends/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default Friend;