import React from 'react';
// import './Profile.module.css'
import s from './Post.module.css'

type PropsType = {
    message:string
    like: number
}

export const Post:React.FC<PropsType> = (props: PropsType) => {
    return (
        <div className={s.item}>
            new post
            <div>
                <img src="https://newcastlebeach.org/images/face-4.jpg"/>
                {props.message}
                <div>
                    <span>likes</span> {props.like}
                </div>
            </div>
        </div>
);
}

