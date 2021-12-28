import React from "react";
import PostItem from './post_item';

class Posts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { posts, user, comments, currentUser } = this.props
        // debugger
        const post = user ? (
            posts.map( post => {
                if(post.profile === user.id) {
                    return (
                        <PostItem 
                            key={post.id}
                            post={post}
                            author={post.author}
                            postId={post.id}
                            updatePost={this.props.updatePost}
                            deletePost={this.props.deletePost}
                            popUpModal={this.props.popUpModal}
                            currentUser={currentUser}
                            userPhoto={post.userphoto}
                        />
                    )
                }
            })
        ) : (
            Object.values(posts).map( (post) => {
                if( post.profile === 0 || !post.profile ) {
                    return (
                        <PostItem 
                            key={post.id}
                            post={post}
                            author={post.author}
                            postId={post.id}
                            updatePost={this.props.updatePost}
                            deletePost={this.props.deletePost}
                            popUpModal={this.props.popUpModal}
                            currentUser={currentUser}
                            userPhoto={post.userphoto}
                        />
                    )
                }
            })
        );
        
        return (
            <div>
                {post}
            </div>
        )
    }
}


export default Posts;