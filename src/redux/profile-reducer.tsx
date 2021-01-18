import {PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';

const profileReducer = (state: ProfilePageType,action: any) => {
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