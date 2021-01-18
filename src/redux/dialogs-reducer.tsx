import {ActionType} from "../components/Profile/MyPosts/MyPosts";
import {DialogsPageType} from "./state";


const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


const dialogsReducer = (state:DialogsPageType,action: ActionType) => {
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