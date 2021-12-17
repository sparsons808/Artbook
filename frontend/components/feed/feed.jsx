import React from "react";
import NavContainer from '../session/nav_container';
import PostContainer from '../posts/posts_container';
import Modal from "../modal/modal";

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts().then(this.props.fetchComments())
    }

    render() {
        if(!this.props.posts || !this.props.comments) return null
        return (
            <div className="feed-page">
                <NavContainer/>
                <div className="feed-container">
                    <div className="post-container">
                        <div className="post-form">
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