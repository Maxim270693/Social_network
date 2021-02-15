import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AllStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Preloader} from "../common/preloader/Preloader";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId: string,
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

type OwnProps = {

}

type MapStateType = {
    profile: null | ProfileType
}

type MapDispatchType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsType = OwnProps & MapStateType & MapDispatchType

class ProfileContainer extends React.Component<CommonPropsType, AllStateType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                {this.props.profile ? <Profile {...this.props} profile={this.props.profile}/> :  <Preloader/>}
            </div>
        );
    }
}

let mapStateToProps = (state: AllStateType): MapStateType =>  ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateType, MapDispatchType, OwnProps, AllStateType> (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);