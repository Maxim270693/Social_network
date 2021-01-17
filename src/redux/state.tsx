import {ActionType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


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

    dispatch(action: ActionType) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 32
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const ChangeNewTextActionCreator = (newText: string) =>
    ({type: CHANGE_NEW_TEXT, newText: newText}) as const

export const SendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: CHANGE_NEW_MESSAGE_BODY, body: body}) as const


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

