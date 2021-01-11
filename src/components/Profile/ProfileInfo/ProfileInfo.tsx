import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return(
        <div>
            <div>
                <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
}

export default ProfileInfo;