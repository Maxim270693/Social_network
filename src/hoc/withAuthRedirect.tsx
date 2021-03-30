import React, {ComponentType} from "react"
import {AllStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean | null
}

const mapStateToProps = (state: AllStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

// let mapStateToPropsForRedirect = (state: AllStateType) => ({
//     isAuth: state.auth.isAuth
// })
//
// export const withAuthRedirect = (Component) => {
//
//     class RedirectComponent extends React.Component {
//         render() {
//             if( !this.props.isAuth ) return <Redirect to='Login'/>
//
//             return <Component {...this.props}/>
//         }
//     }
//
//     let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
//     return ConnectedAuthRedirectComponent
// }



export function withAuthRedirect<T>(Component:ComponentType<T>) {

    const RedirectComponent = (props:MapStatePropsType) => {
        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}