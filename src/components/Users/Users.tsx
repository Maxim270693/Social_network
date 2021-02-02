import React from "react";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import {AllStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType = {
    users: Array<usersType>
}

type mapDispatchToPropsType = {                         // Надо ли эта типизация? И куда она идет
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}

type PropsType = mapStateToPropsType & mapDispatchToPropsType

export function Users(props: PropsType) {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/236x/a6/d0/87/a6d087f3ee63e499977841d2a90a53e6.jpg',
                followed: false,
                fullName: 'Julia',
                status: 'I am a sister',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://images.pexels.com/photos/3031396/pexels-photo-3031396.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                followed: true,
                fullName: 'Vlad',
                status: 'I am a friend',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXrFMnQrS3cdGFTB-UpG-5qMGMQyybPu7xg&usqp=CAU',
                followed: false,
                fullName: 'Yura',
                status: 'I am a friend too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }


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


let mapStateToProps = (state: AllStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AllStateType>(mapStateToProps, mapDispatchToProps)(Users)