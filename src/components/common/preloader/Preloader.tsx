import React from "react";
import preloader from '../../../assets/images/preloader1.png'

type PreloaderPropsType = {   // Правильная ли типизация ?
    preloader: string
}

export function Preloader(props: PreloaderPropsType) {
    return(
        <>
            <div>
                <img src={preloader}/>
            </div>
        </>
    )
}