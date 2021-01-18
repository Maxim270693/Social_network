import React from "react";
import s from './../Dialogs.module.css'

export type messagesType = {
    id: number
    message:string
}


function MessageItem(props: messagesType) {

    // let postElement = React.createRef<HTMLTextAreaElement>()

    // let addNewMessage = () => {
    //     let text = postElement.current?.value
    //     alert(text)
    // }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            {/*<button onClick={addNewMessage}>Add Message</button>*/}
            {/*<textarea ref={postElement}></textarea>*/}
        </div>

    )
}



export default MessageItem;