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
    popUpModal: (postId) => dispatch(popUpModal(postId))
})

class DropDownMenu extends React.Component { 
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete(e) {
        
        e.preventDefault()
        this.props.deletePost(this.props.postId).then(this.props.toggleDropDown())
    }


    render() {
        
        return (
            <div className="drop-down-menue">
                <Modal />
                <div onClick={this.handleDelete}>
                    <img src={trash} className="trash-icon"/>
                    Delete
                </div>
                <div onClick={() => this.props.popUpModal(this.props.postId)}>
                    Edit Post
                </div>
            </div>
        )
    }
  
}

export default connect(null, mDTP)(DropDownMenu);