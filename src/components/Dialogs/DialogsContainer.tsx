import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreTypeRedux} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";


export type PropsType = {
    store: StoreTypeRedux
}


// function DialogsContainer(props:PropsType) {
//
//     let state = props.store.getState().dialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(SendMessageCreator())
//     }
//     let onNewMessageChange = (body: string) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return (
//         <Dialogs store={props.store}
//                  updateNewMessageBody={onNewMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialogsPage={state}
//         />
//     )
// }


let mapStateToProps = (state:RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // store: store
    }
}

let mapDispatchToProps = (dispatch: any) => {     // dispatch: any - error!!!
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs)


export default DialogsContainer;