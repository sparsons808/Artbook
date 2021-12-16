import React from "react";
import PostForm from "./post_form";
import { connect } from "react-redux";
import { fetchPosts, updatePost } from '../../actions/post_actions'
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    const post = ownProps.postId ? state.entities.posts[ownProps.postId] : null
    
    return (
        {
            post: post,
            currentUser: state.session.currentUser,
            formType: 'Edit'
        }
    )
}

const mDST = dispatch => ({
    action: (post, id) => dispatch(updatePost(post, id)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: () => dispatch(fetchPosts())
})

class EditPost extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchPosts()
    }

    render() {        
        return (
            <PostForm 
                post={this.props.post}
                currentUser={this.props.currentUser}
                formType={this.props.formType}
                action={this.props.action}
                closeModal={this.props.closeModal}
            />
        )
    }
}

export default connect(mSTP, mDST)(EditPost);