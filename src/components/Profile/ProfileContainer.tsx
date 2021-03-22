import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {AllStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

type OwnProps = {}

type MapStateType = {
    profile: null | ProfileType,
    isAuth: boolean | null
}

type MapDispatchType = {
     getUserProfile: (userId: number) => void
}

type PropsType = OwnProps & MapStateType & MapDispatchType

class ProfileContainer extends React.Component<CommonPropsType, AllStateType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(+userId)
    }

    render() {

        if( !this.props.isAuth ) return <Redirect to='Login'/>

        return (
            <div>
                {this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> :  <Preloader/>}
            </div>
        );
    }
}

let mapStateToProps = (state: AllStateType): MapStateType =>  ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateType, MapDispatchType, OwnProps, AllStateType> (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);