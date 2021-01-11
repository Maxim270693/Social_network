import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type postType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
    newPostText: string
}

function MyPosts(props: postType) {

    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>)


    function addPost() {
            props.addPost(props.newPostText)

    }

    const changeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div className={s.item}>
                <div>
                    <textarea onChange={changeNewText}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;