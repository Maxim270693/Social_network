import React from "react";
import {usersPropsType, usersType} from "../../redux/users-reducer";
import styles from './Users.module.css'

type PropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: usersPropsType) => void
}




export function Users(props: PropsType) {
    return(
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} alt="Photo"/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )
}