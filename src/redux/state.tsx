import {ActionType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';


export type StoreType = {
    _state: RootStateType
    subscribe: any
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionType) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', like: 12},
                {id: 2, message: "It's my first post", like: 1}
            ],
            newPostText: ' '
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Maksim'},
                {id: 2, name: 'Lika'},
                {id: 3, name: 'Houston'},
                {id: 4, name: 'Sofa'},
                {id: 5, name: 'Eva'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Goodbye'},
                {id: 5, message: 'Welcome'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action:ActionType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {    // что значит лучше перменную типизировать(типизация 31-34 выпуски 10мин 42сек )
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 32
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const ChangeNewTextActionCreator = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    }
}


export type MessageType = {
    id: number
    message: string

}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type AppStateType = {
    appState: RootStateType
}


export default store;

