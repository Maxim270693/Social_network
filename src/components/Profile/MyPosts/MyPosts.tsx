import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, ChangeNewTextActionCreator, PostType} from "../../../redux/state";

type postType = {
    posts: Array<PostType>
    dispatch: (action: any) => void
    newPostText: string
}

type AddPostType = {
    type: 'ADD-POST'
}

type ChangeTextType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ActionType = AddPostType | ChangeTextType




// export const addPostActionCreator = () => {
//      const ADD_POST = 'ADD-POST'     // в state выносится на самый вверх
//          return {
//              type:ADD_POST
//          }
//}




// const ChangeNewTextActionCreator = () => {               // 17.25
//     const CHANGE_NEW_TEXT =  'CHANGE-NEW-TEXT'
//     return { type:  CHANGE_NEW_TEXT, newText: text}
// }


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