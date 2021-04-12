import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostsType = {
    id: number
    message: string
    like: number
}

export type postType = {
    posts: Array<PostsType>
    // newPostText: string
    addPost: (newPostText:string) => void
    // updateNewPostText: (value: string) => void
}

type FormDataType = {
    newPostText: string
}

function MyPosts(props: postType) {

    let postsElement = props.posts.map(p => <Post message={p.message} key={p.id} like={p.like}/>)

    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
    }

    return (

        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div className={s.item}>
                <AddMessageFormRedux  onSubmit={onSubmit} {...props}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

let AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;