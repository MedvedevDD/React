import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

function DialogItem(props:DialogItemPropsType) {
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
)
}

function Message(message:MessagePropsType) {
    return  <div className={s.message}> {message.message} </div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id={1}/>
                <DialogItem name="Tatiana" id={2}/>
                <DialogItem name="Veronika" id={3}/>
                <DialogItem name="Sergey" id={4}/>
                <DialogItem name="Sveta" id={5}/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="Hi"/>
                <Message message="Aloha"/>
            </div>
        </div>

)
}
export default Dialogs;