import React from "react";
import preloader from '../../../assets/images/preloader1.png'


export function Preloader() {
    return(
        <>
            <div>
                <img src={preloader}/>
            </div>
        </>
    )
}