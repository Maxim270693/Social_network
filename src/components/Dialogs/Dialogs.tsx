import React from 'react'
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import MessageItem from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    name: string
    id: number
}

export type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type PropsType = {
    dialogsPage: DialogsType
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    isAuth: boolean | null
}

type FormDataType = {
    newMessageBody: string
}

function Dialogs(props: PropsType) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d: DialogType) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElement = state.messages.map((m: MessageType) => <MessageItem message={m.message} key={m.id} id={m.id}/>)

    const onSubmit = (formData: FormDataType) => {
        debugger
        props.sendMessage(formData.newMessageBody)
    }


    //if( !props.isAuth ) return <Redirect to='Login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageFormRedux onSubmit={onSubmit} {...props} />
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;