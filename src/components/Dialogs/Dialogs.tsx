import React, {ChangeEvent} from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import MessageItem from './Message/Message';
import {DialogsPageType, SendMessageCreator, StoreType, updateNewMessageBodyCreator} from "../../redux/state";



type PropsType = {
    store: StoreType
    state: DialogsPageType
}


function Dialogs(props:PropsType) {

    let state = props.store.getState().dialogsPage

   let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesElement = state.messages.map( m => <MessageItem message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;