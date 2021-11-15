import React from 'react';
import Friend from './Friend';


const Friends = (props) => {
    let myFriendsElements = props.state.map(m => <Friend name={m.name} id={m.id}/>)

    return (
        <div>
            {myFriendsElements}

        </div>
    )
}


export default Friends;