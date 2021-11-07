import React from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../modal/modal";

class Profile extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchUsers()
    }
    render() {
        // debugger
        if (!this.props.user) return null;
        const { user } = this.props
        return (
            <div className="profile">
                {/* need to go into jbuilder to make sure that bio and work are editable on user
                give demo user a bio and work place */}
                <div>
                    {/* where cover photo and profile photo go */}
                    <div>
                        {this.props.user.name}
                    </div>
                </div>
                <div className="profile-nav">
                    <div>
                        <NavLink exact to={`/profile/${user.id}/posts`}>Posts</NavLink>
                    </div>
                    <div>
                        <NavLink exact to={`/profile/${user.id}/about`}>About</NavLink>
                    </div>
                    <div>
                        <NavLink exact to={`/profile/${user.id}/friends`}>Friends</NavLink>
                    </div>
                    <div>
                        <NavLink exact to={`/profile/${user.id}/photos`}>Photos</NavLink>
                    </div>
                    <div className="edit-profile">
                        <div onClick={() => this.props.editProfile()}>Edit Profile</div>
                        <Modal user={user} />
                    </div>
                </div>
                <div className="profile-wall">
                    <div className="post-form-profile">
                        {/* <PostFom user={user} /> */}
                    </div>
                    <div className="post-index-profile">
                        {/* <PostIndex /> */}
                    </div>
                </div>
                <div>
                    <div className="profile-left">
                        <span>Intro</span>
                        <div>
                           bio: {user.bio}
                        </div>
                        <div>
                           work: {user.work}
                        </div>
                        <div>
                           home: {user.location}
                        </div>
                    </div>
                    <div className="profile-photos">
                        <span>Photos</span>
                        <Link to={`/profile/${user.id}/photos`}>See All Photos</Link>
                    </div>
                    <div className="profile-friends">
                        <span>Friends</span>
                        <Link to={`/profile/${user.id}/friends`} >See All Friends</Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default Profile;