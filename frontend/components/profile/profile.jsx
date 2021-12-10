import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserNaveContainer from "./user_nav_container"
import PostIndexContainerProfile from "../posts/post_index_container_profile";
import CreatePostContainer from "../posts/create_post_form_container";
import NavContainer from "../session/nav_container";

class Profile extends React.Component {
    componentDidMount() {
        // //
        this.props.fetchUsers()
    }
    
    render() {
        // //
        if (!this.props.user) return null;
        const { user } = this.props
        return (
            <div className="profile-page">
                <NavContainer/>
                <div className="profile-container">
                    <div className="profile-top">
                        
                        <UserNaveContainer userId={user.id} />

                    </div>
                    <div className="profile-wall">
                        <div className="post-index-profile">
                           <PostIndexContainerProfile user={user} />
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
            </div>
        )
    }
};

export default Profile;