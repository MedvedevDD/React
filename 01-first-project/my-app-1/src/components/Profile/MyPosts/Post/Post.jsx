import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  // debugger
  return (
    <div>
      <div className={s.item}>
        <img src='https://s.starladder.com/uploads/user_logo/7/5/9/d/thumb_270_f7c1668044d66f8eff98cc60ff1d7fbe.jpg' />
        {props.message}
        <div>
          <span>like </span> {props.likecounts}
        </div>

      </div>
    </div>
  )
}
export default Post;