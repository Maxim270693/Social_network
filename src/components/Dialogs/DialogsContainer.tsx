import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreTypeRedux} from "../../redux/redux-store";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {Dispatch} from "redux";

//
// export type PropsType = {
//     store: StoreTypeRedux
// }


let mapStateToProps = (state:RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // store: store
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
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