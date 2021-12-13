import React from "react";
import NavContainer from '../session/nav_container';
import PostContainer from '../posts/posts_container';

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        if(!this.props.posts) return null
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
                        <PostContainer posts={this.props.posts} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Feed;