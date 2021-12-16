import React from "react";
import { connect } from "react-redux";


const mSTP = (state, ownProps) => {
    return ({
        comment: {
            post_id: ownProps.postId,
            body: ''
        }
    })
}

const mDTP = dispatch => ({

})