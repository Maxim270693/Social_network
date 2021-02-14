import dialogsReducer from "./dialogs-reducer";
import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";


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
            ],
            newMessageBody: ''
        },
        // sidebar: {}
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

    dispatch(action: ActionType) {
/*
        this._state.profilePage = profileReducer(this._state.profilePage, action)
*/
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state);
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
    newMessageBody: string
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

