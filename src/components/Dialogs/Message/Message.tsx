import React from "react";
import s from './../Dialogs.module.css'




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

export type messagesType = {
    id: number
    message:string
}

export default MessageItem;