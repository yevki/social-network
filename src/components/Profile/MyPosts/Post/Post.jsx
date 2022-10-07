import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img className={s.smallImg} src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0' />
    {props.message}
    <div>
      <span>{props.likes}</span>
    </div>
  </div>
}

export default Post;