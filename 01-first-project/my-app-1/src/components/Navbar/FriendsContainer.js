import React from "react";
import Friends from "./MyFriends";
import {connect} from "react-redux";

/*const FriendsContainer = () => {

    return (
        <storeContext.Consumer>
            {(store) => {
                return <Friends state={store.getState().sidebar.myFriends}/>
            }
            }
        </storeContext.Consumer>

    )
}*/
let mapStateToProps = (state) => {
    return {
        state: state.sidebar.myFriends
    }
}
const FriendsContainer = connect (mapStateToProps) (Friends);

export default FriendsContainer;