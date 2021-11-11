import React from "react";
import PostIndexItem from "./post_index_item";
import Modal from "../modal/modal";

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        //debugger
        if(!this.props.posts) return null;
        
        const { 
            posts, 
            currentUser, 
            deletPost, 
            updatePost 
        } = this.props
        
        // const filiterd = posts.filter( post => {
        //     return post.author.id === this.props.user.id
        // })

        const postItem = this.props.user ? (
            posts.filter( post => (
                post.author.id === this.props.user.id
            )).map( (post, idx) => ( 
                <PostIndexItem 
                    key={post.id} 
                    post={post}
                    user={this.props.user} 
                    deletPost={deletPost}
                    updatePost={updatePost}
                />
            ))
        ) : (
            posts.map( (post, idx) => ( 
                <PostIndexItem 
                    key={post.id} 
                    post={post} 
                    deletPost={deletPost}
                    updatePost={updatePost}
                />
            ))
        )
        

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
                            onClick={() => this.props.popUpModal()} 
                            placeholder={`Whats on your mind, ${this.props.currentUser.name} ?`}
                            cols="55" rows="2.5"
                        ></textarea>
                    </form>
                </div>
                <Modal />
                {postItem}
            </div>
        )
    }
}

export default PostIndex;