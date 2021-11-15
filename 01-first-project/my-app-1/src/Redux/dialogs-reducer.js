const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
}
export default dialogsReducer;
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})