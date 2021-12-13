import React from 'react';
import s from "./Post.module.css";

type MessagePropsType = {
    message: string
    likeCounts: number
}

export function Post(props: MessagePropsType) {
    return (
        <div className={s.item}>
            <img src='https://cspromogame.ru//storage/upload_images/avatars/900.jpg'/>
            {props.message}
            <div>
                <span>{props.likeCounts} like</span>
            </div>
        </div>
    )
}