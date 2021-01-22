import {PostType, ProfilePageType} from "./store";
import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";


const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi how are you?', like: 12},
            {id: 2, message: "It's my first post", like: 1}
        ],
        newPostText: ' '
    }

const profileReducer = (state: ProfilePageType = initialState,action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:const newPost: PostType = {
            id: 5,
            message: state.newPostText,
            like: 32
        };
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const ChangeNewTextActionCreator = (newText: string) =>
    ({type: CHANGE_NEW_TEXT, newText: newText}) as const

export default profileReducer