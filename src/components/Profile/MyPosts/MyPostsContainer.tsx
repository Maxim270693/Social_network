import React from 'react';
import {addPostActionCreator, ChangeNewTextActionCreator,} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {StoreTypeRedux} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";

type postType = {
    store: StoreTypeRedux
}

export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof ChangeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>



// function MyPostsContainer(props: postType) {
//     let state = props.store.getState()
//
//
//     function addPost() {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     const onPostChange = (value: string) => {
//         let action = ChangeNewTextActionCreator(value);
//         props.store.dispatch(action)
//     }
//
//     return (
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//         />
//     );
// }

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (value: string) => {
            let action = ChangeNewTextActionCreator(value);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}



const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);


export default MyPostsContainer;