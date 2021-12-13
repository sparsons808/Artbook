import React from "react";
import PostItem from './post_item';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { posts } = this.props
        
        const post = Object.values(posts).map( (post) => {
            return (
                <PostItem 
                    key={post.id}
                    post={post}
                    author={post.author}
                    postId={post.id}
                    updatePost={this.props.updatePost}
                    deletePost={this.props.deletePost}
                    popUpModal={this.props.popUpModal}
                    currentUser={this.props.currentUser}
                />
            )
        })
        return (
            <div>
                {post}
            </div>
        )
    }
}


export default Posts;