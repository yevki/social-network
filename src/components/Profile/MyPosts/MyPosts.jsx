import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how are you?' likes='Likes - 17' />
      <Post message='It is my first post' likes='Likes - 20' />
    </div>
  </div>
}

export default MyPosts;