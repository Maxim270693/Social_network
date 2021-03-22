import React, {ChangeEvent} from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import MessageItem from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from "../../redux/store";
import { Redirect } from 'react-router-dom';


type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean | null
}


function Dialogs(props:PropsType) {

    let state = props.dialogsPage

   let dialogsElements = state.dialogs.map( (d: DialogType) => <DialogItem name={d.name} key={d.id} id={d.id}/> )
    let messagesElement = state.messages.map( (m: MessageType) => <MessageItem message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        debugger
        props.sendMessage()
    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    if( !props.isAuth ) return <Redirect to='Login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;