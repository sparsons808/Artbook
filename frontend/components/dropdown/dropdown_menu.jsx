import React from "react";
import Modal from "../modal/modal";
import { deletePost } from "../../actions/post_actions";
import { popUpModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
    postId: ownProps.postId,
    toggleDropDown: ownProps.toggleDropDown
})
const mDTP = dispatch => ({
    deletePost: (postId) => dispatch(deletePost(postId)),
    popUpModal: () => dispatch(popUpModal('editPost'))
})

class DropDownMenu extends React.Component { 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e) {
        debugger
        e.preventDefault()
        this.props.deletePost(this.props.postId).then(this.props.toggleDropDown())
    }


    render() {
        debugger
        return (
            <div className="drop-down-menue">
                <Modal postId={this.props.postId} />
                <div onClick={this.handleDelete}>
                    <img src={trash} className="trash-icon"/>
                    Delete
                </div>
                <div onClick={() => this.props.popUpModal()}>
                    Edit Post
                </div>
            </div>
        )
    }
  
}

export default connect(null, mDTP)(DropDownMenu);