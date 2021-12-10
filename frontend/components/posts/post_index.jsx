import React from "react";
import PostIndexItem from "./post_index_item";
import Modal from "../modal/modal";

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        //
        if(!this.props.posts) return null;
        
        const { 
            posts, 
            currentUser, 
            deletePost, 
            updatePost 
        } = this.props
        
        // const filiterd = posts.filter( post => {
        //     return post.author.id === this.props.user.id
        // })
        
        const postItem = this.props.user ? (
            posts.filter( post => (
                post.author.id === this.props.user.id || post.profile === this.props.user.id
            )).map( (post, idx) => ( 
                <div>
                    <PostIndexItem 
                        key={post.id}
                        postId={post.id} 
                        post={post}
                        user={this.props.user} 
                        deletePost={deletePost}
                        updatePost={updatePost}
                        popUpModal={this.props.popUpModal}
                        comments={post.comments}
                        author={post.author}
                        currentUser={currentUser}
                    />
                    
                </div>
            ))
        ) : (
            posts.filter( post => (
                post.profile === null
            )).map( (post, idx) => ( 
                <div>
                    <PostIndexItem 
                        key={post.id}
                        postId={post.id} 
                        post={post} 
                        deletePost={deletePost}
                        updatePost={updatePost}
                        popUpModal={this.props.popUpModal}
                        comments={post.comments}
                        author={post.author}
                        currentUser={currentUser}
                    />
                </div>
            ))
        )
        
        const userProfile = this.props.user ? this.props.user : null

        // const postItem = posts.map( (post, idx) => ( 
        //     <PostIndexItem 
        //         key={post.id} 
        //         post={post} 
        //         deletPost={deletPost}
        //         updatePost={updatePost}
        //     />
        // ));

        return (
            <div className="post-container">
                <div className="post-form">
                    <form onSubmit={this.handleSubmit}>
                        <textarea
                            onClick={() => this.props.popUpModal('createpost')} 
                            placeholder={`Whats on your mind?`}
                            cols="55" rows="2.5"
                        ></textarea>
                    </form>
                </div>
                <Modal userProfile={userProfile}/>
                {postItem}
            </div>
        )
    }
}

export default PostIndex;