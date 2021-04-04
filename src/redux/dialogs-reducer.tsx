import {ActionType} from "../components/Profile/MyPosts/MyPostsContainer";
import {DialogsType} from "../components/Dialogs/Dialogs";


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


const dialogsReducer = (state:DialogsType = initialState,action: ActionType): DialogsType=> {

    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return  {...state,newMessageBody: '', messages: [...state.messages,{id: 6, message: body}]}
        default:
            return state
    }
}


export const SendMessageCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: CHANGE_NEW_MESSAGE_BODY, body: body}) as const


export default dialogsReducer