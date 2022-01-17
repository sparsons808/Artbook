import React from "react";
import NavContainer from '../session/nav_container';
import PostContainer from '../posts/posts_container';
import Modal from "../modal/modal";
import { Link } from "react-router-dom";

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
            .then(this.props.fetchComments())
                .then(this.props.getLikes())
    }

    render() {
        if(!this.props.posts || !this.props.comments) return null
        return (
            <div className="feed-page">
                <NavContainer/>
                <div className="feed-container">
                    <div className="links-container">
                        <div className="profile-link">
                                { this.props.currentUser.profilePhotoUrl ? (
                                    <Link className="to-currentUser" to={`/profile/${this.props.currentUser.id}`}>
                                        <img className="side-menue-profile-pic" src={this.props.currentUser.profilePhotoUrl} />
                                        <span>{this.props.currentUser.name}</span>
                                    </Link>
                                ) : (
                                    <Link className="to-currentUser" to={`/profile/${this.props.currentUser.id}`}>
                                        <img className="side-menue-profile-pic" src={profilephoto} />
                                        <span>{this.props.currentUser.name}</span>
                                    </Link>
                                )} 
                        </div>
                        <div className="github-link">
                            <a href="https://github.com/sparsons808" target="_blank">
                                <img src={github}/>
                                <span>GitHub</span>
                            </a>
                        </div>
                        <div className="linkedin-link">
                            <a href="https://www.linkedin.com/in/sydney-parsons-18929458/" target="_blank">
                                <img src={linkedin}/>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div className="angellist-link">
                            <a href="https://angel.co/u/sydney-parsons" target="_blank">
                                <img src={angellist}/>
                                <span>AngelList</span>
                            </a>
                        </div>
                    </div>
                    <div className="post-container">
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
                        <Modal userProfile={0}/>
                        <PostContainer posts={this.props.posts} comments={this.props.comments} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;