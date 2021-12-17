import React from "react";
import Modal from "../modal/modal";
import { deletePost } from "../../actions/post_actions";
import { popUpModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
    id: ownProps.elementId,
    toggleDropDown: ownProps.toggleDropDown,
    type: ownProps.type
})
const mDTP = dispatch => ({
    deletePost: (postId) => dispatch(deletePost(postId)),
    popUpModal: (postId) => dispatch(popUpModal(postId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
})

class DropDownMenu extends React.Component { 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete(e) {
        e.preventDefault()
        if(this.props.type === 'Post') {
            this.props.deletePost(this.props.elementId).then(this.props.toggleDropDown())
        } else {
            this.props.deleteComment(this.props.elementId).then(this.props.toggleDropDown())
        }
    }


    render() {
        
        return (
            <div className="drop-down-menue">
                <Modal />
                <div onClick={this.handleDelete}>
                    <img src={trash} className="trash-icon"/>
                    Delete
                </div>
                { this.props.type === 'Post' ? (
                    <div onClick={() => this.props.popUpModal(this.props.elementId)}>
                        Edit Post
                    </div>
                ) : (
                    <div>
                        Edit Comment
                    </div>
                )}
            </div>
        )
    }
  
}

export default connect(null, mDTP)(DropDownMenu);