import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
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
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;