import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body);


    }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>

            <div className={s.messages}>


                {messagesElements}
                <textarea placeholder='Enter your message here'
                          value={newMessageBody}
                          onChange={onNewMessageChange}/>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;