import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    addPostActionCreator,
    ChangeNewTextActionCreator,
    PostType, SendMessageCreator,
    updateNewMessageBodyCreator
} from "../../../redux/state";

type postType = {
    posts: Array<PostType>
    dispatch: (action: any) => void
    newPostText: string
}

export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>


function MyPosts(props: postType) {

    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>)


    function addPost() {
        props.dispatch(addPostActionCreator())
    }

    const changeNewText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = ChangeNewTextActionCreator(e.currentTarget.value);
        props.dispatch(action)
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