import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AllStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

type OwnProps = {}

type MapStateType = {
    profile: null | ProfileType
    status: string
}

type MapDispatchType = {
    getUserProfile: (userId: number) => void
    getStatus:(userId: number) => void
    updateStatus:(status: string) => void
}

type PropsType = OwnProps & MapStateType & MapDispatchType

class ProfileContainer extends React.Component<CommonPropsType, AllStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "14465"
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return (
            <div>
                {this.props.profile ? <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/> : <Preloader/>}
            </div>
        );
    }
}

let mapStateToProps = (state: AllStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect<MapStateType, MapDispatchType, OwnProps, AllStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,

)(ProfileContainer)
