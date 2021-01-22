import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreTypeRedux} from "../../redux/redux-store";


type PropsType = {
    store: StoreTypeRedux
}


function DialogsContainer(props:PropsType) {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs store={props.store}
                 updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}


export default DialogsContainer;