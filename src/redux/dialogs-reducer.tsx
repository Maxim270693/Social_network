import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {DialogsType} from "../components/Dialogs/Dialogs";


const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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


const dialogsReducer = (state: DialogsType = initialState, action: ActionType): DialogsType => {

    switch (action.type) {
        case SEND_MESSAGE:
            debugger
            let body = action.newMessageBody
            let a = {...state, messages: [...state.messages, {id: 6, message: body}]}
            return a
        default:
            return state
    }
}


export const SendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody}) as const
export default dialogsReducer