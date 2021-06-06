import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

function ProfileInfo(props: ProfileInfoPropsType) {
    const imageUrl = props.profile.photos.large ? props.profile.photos.large : ''
    return (
        <div>
            <div>
                <img
                    src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'
                    width='100%'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={imageUrl}/>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;