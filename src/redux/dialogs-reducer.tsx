
import {DialogsPageType} from "./store";
import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";


const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY'
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
        ],
        newMessageBody: ''
    }


const dialogsReducer = (state:DialogsPageType = initialState,action: ActionType): DialogsPageType=> {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}


export const SendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: CHANGE_NEW_MESSAGE_BODY, body: body}) as const


export default dialogsReducer