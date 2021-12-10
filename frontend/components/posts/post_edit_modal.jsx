import React from "react";


const PostEditModal = ({}) => {


    return (
        <span className="comment-btn" >
            <span>
                <input type="submit"  value="..." onClick={ () => popUpModal('editPost')} />
            </span>
        </span>
    )
}