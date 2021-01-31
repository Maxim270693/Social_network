import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type postType = {
    posts: Array<PostType>
    newPostText: string
    addPost: ()=> void
    updateNewPostText: (value: string)=> void
}

function MyPosts(props: postType) {

    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} like={p.like}/>)

    function onAddPost() {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;