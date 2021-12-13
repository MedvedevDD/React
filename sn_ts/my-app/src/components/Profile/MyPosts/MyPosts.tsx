import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

function MyPosts() {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <textarea placeholder="введите ваше сообщение"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello" likeCounts={10}/>
                <Post message="How are you?" likeCounts={15}/>
            </div>
        </div>
    )
}

export default MyPosts;