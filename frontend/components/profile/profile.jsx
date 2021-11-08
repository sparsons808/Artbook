import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserNaveContainer from "./user_nav_container"


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
                
                <div className="profile-top">
                    
                    <UserNaveContainer userId={user.id} />
                
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
                <div className="profile-left">
                    <div className="info">
                        <div>
                            <span>Intro</span>
                        </div>
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