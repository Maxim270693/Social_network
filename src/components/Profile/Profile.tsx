import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type profilePostsType = {
    // store: StoreTypeRedux
}

function Profile(props: profilePostsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
}

export default Profile;