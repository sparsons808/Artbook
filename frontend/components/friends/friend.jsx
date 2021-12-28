import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {

    const profilePic = () => (
        <div className="friend">
            { friend.profilePhotoUrl ? (
                <Link  to={`/profile/${friend.id}`}>
                    <img src={friend.profilePhotoUrl} />
                    <div>{friend.name}</div>
                </Link>
            ) : (
                <Link  to={`/profile/${friend.id}`}>
                    <img src={profilephoto} />
                    <div>{friend.name}</div>
                </Link>
            )}
        </div>
    )

    return (
        <div className="friend-soup">
            {profilePic()}
        </div>
    )
}

export default Friend;