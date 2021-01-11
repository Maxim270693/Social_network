import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import MessageItem from './Message/Message';
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";


type PropsType = {
    state: DialogsPageType
}


function Dialogs(props:PropsType) {


   let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )

    let messagesElement = props.state.messages.map( m => <MessageItem message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}


export default Dialogs;