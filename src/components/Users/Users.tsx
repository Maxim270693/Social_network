import React from "react";
import styles from "./Users.module.css";
import {usersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom"

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<usersType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                            return <span className={props.currentPage === p ? styles.selectedPage : ''}
                                         onClick={(e) => {
                                             props.onPageChanged(p)
                                         }}>{p}</span>
                        }
                    )
                }
            </div>
            {
                props.users.map((u: usersType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt="Photo"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}