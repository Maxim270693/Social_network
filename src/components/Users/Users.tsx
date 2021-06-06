import React from "react";
import styles from "./Users.module.css";
import {FollowingInProgressType, usersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/users.png";
import {NavLink} from "react-router-dom"
import {Paginator} from "./Paginator";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<usersType>
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<FollowingInProgressType>
}


export let Users:React.FC<UsersPropsType> = ({currentPage,onPageChanged,pageSize,totalUsersCount,...props}) => {
    return (
        <div>
            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}/>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                                 alt="Photo"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => {props.follow(u.id)
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