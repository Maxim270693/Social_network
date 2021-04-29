import React, {ChangeEvent, useState} from "react";

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}


export function ProfileStatusWithHooks(props:ProfileStatusWithHooksPropsType) {

    const[editMode,setEditMode] = useState(false)
    const[status,setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode( false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus( e.currentTarget.value)
    }
    // componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: PrevStatePropsType) {
    //     if( prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}