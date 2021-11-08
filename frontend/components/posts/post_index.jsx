import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        const { 
            posts, 
            currentUser, 
            deletPost, 
            updatePost 
        } = this.props

        const postItem = posts.map( (post, idx) => ( 
            <PostIndexItem 
                key={post.id} 
                post={post} 
                deletPost={deletPost}
                updatePost={updatePost}
            />
        ));

        return (
            <div className="post">
                {postItem}
            </div>
        )
    }
}

export default PostIndex;