import React from "react";
import Modal from "../modal/modal";


const DropDownMenu = ({ 
    postId, 
    toggleDropDown,
    popUpModal,
    deletePost
 }) => {

    const select = (type) => {
        if(type === 'delete') {
            deletePost(this.props.postId).then( toggleDropDown() )
        } else {
            popUpModal()
            toggleDropDown()
        }
    }

    return (
        <div className="drop-down-menue">
            <Modal postId={postId} />
            <div onClick={select('delete')}>
                <img src={trash} className="trash-icon"/>
                Delete
            </div>
            <div onClick={select('edit')}>
                Edit Post
            </div>
        </div>
    )
  
}

export default DropDownMenu;