import React from "react";


const PostEditModal = ({
    postId,
    popUpModal
}) => {


    return (
        <span className="comment-btn" >
            <span>
                <input type="submit"  value="..." onClick={ () => popUpModal('editPost')} />
            </span>
        </span>
    )
}

export default PostEditModal;