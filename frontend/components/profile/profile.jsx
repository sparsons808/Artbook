import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserNaveContainer from "./user_nav_container"
// import PostIndexContainerProfile from "../posts/post_index_container_profile";
// import CreatePostContainer from "../posts/create_post_form_container";
import NavContainer from "../session/nav_container";
import Modal from "../modal/modal";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // //
        this.props.fetchUsers()
        this.props.fetchPosts().then(this.props.fetchComments())
    }
    
    render() {
        // //
        if (!this.props.user) return null;
        debugger
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
                            <div className="post-form">
                                <div className="profile-photo" >
                                    { this.props.currentUser.profilePhotoUrl ? ( 
                                        <img src={this.props.currentUser.profilePhotoUrl}/>
                                    ) : (
                                        <img src={profilephoto}/>
                                    )}
                                </div>
                                <form>
                                    <textarea 
                                        onClick={() => this.props.popUpModal()}
                                        placeholder={`Whats on your mind ${this.props.currentUser.name}?`}
                                        cols="55" 
                                        rows="2.5"
                                    >
                                    </textarea>
                                </form>
                            </div>
                            <Modal userProfile={user.id}/>
                           {/* <PostIndexContainerProfile user={user} /> */}
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