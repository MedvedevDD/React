/*
/!*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*!/
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

/!*const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';*!/

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likescount: '10'},
                {id: 2, message: 'It is my first post', likescount: '15'},
                {id: 3, message: 'Oh My God!!!', likescount: '1500'}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vovan'},
                {id: 2, name: 'Petya'},
                {id: 3, name: 'Evlampiy'},
                {id: 4, name: 'Afonya'},
                {id: 5, name: 'Marusya'}
            ],
            messages: [
                {id: 1, message: 'Yo'},
                {id: 2, message: 'Hello world'},
                {id: 3, message: 'Nice to see You'},
                {id: 4, message: 'Ohh, F*ck off!'},
                {id: 5, message: 'Getta f*ckout!'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            myFriends: [
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Irishka'},
                {id: 3, name: 'Svetka'},
                {id: 4, name: 'Писюн'}
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('ha-ha-ha')
    },

    /!* addPost() {
         let newPost = {
             id: 5,
             message: this._state.profilePage.newPostText,
             likescount: 0
         }
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
     },*!/
    /!*updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*!/
    /!*addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = ' ';
        this._callSubscriber(this._state);
    },*!/
    /!*updateNewMessageText(newMText) {
        this._state.dialogsPage.newMessageText = newMText;
        this._callSubscriber(this._state);
    },*!/

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        /!*if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likescount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }*!/ /!*if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }*!/ /!*else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }*!/ /!*else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }*!/
    }
}

/!*export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})*!/
/!*export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})*!/

export default store;*/
