import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, usersPropsType} from "../../redux/users-reducer";
import {AllStateType} from "../../redux/redux-store";

// type mapStateToPropsType = {
//
// }
//
// type mapDispatchToPropsType = {                         // Надо ли эта типизация? И куда она идет
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: usersPropsType) => void
// }
//
//
// let mapStateToProps = (state: AllStateType) => {
//     return {
//         users: state.usersPage.users
//     }
// }
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: usersPropsType) => {
//             dispatch(setUsersAC(users))
//         }
//     }
// }
// debugger;
//
// export default connect(mapStateToProps, mapDispatchToProps) (Users)