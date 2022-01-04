import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteComment, updateComment } from "../../actions/comment_actions";

const mSTP = (state, ownProps) => {
    return ({
        comment: state.entities.comments[ownProps.comment.id],
        author: ownProps.author,
        userPhoto: ownProps.userPhoto,
        currentUser: ownProps.currentUser
    })
}

const dSTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: (comment, id) => dispatch(updateComment(comment, id))
})

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            body: this.props.comment.body,
            id: this.props.comment.id,
            edit: false
        }

        this.toggleState = this.toggleState.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleKey = this.handleKey.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    toggleState() {
        this.setState( prevState => ({
            isOpen: !prevState.isOpen 
        }))
    }

    handleEdit() {
        this.setState( prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange(body) {
        return (e) => {
            this.setState({ [body]: e.currentTarget.value })
        }
    }

    handleKey(e) {
        return e.code === 'Enter' ? this.handleSubmit() : null
    }

    handleSubmit() {
        
        this.toggleState();
        this.handleEdit();
        const formData = new FormData();
        formData.append('comment[body]', this.state.body);
        formData.append('comment[id]', this.state.id)
        this.props.updateComment(formData, this.state.id);
    }

    handleDelete(e) {
        e.preventDefault()
        this.toggleState()
        this.props.deleteComment(this.props.comment.id)
    }

    render() {

        const { comment, author, currentUser, userPhoto } = this.props

        const editCommentButton = () => (
            <div className="edit-comment">
                { author.id === currentUser.id ? (
                    <div className="post-edit-dropdown" onClick={this.toggleState} >
                        <img className="drop-image"src={drop} />
                    </div>
                ) : null}
            </div>
        )

        const commentDropDown = () => (
            this.state.isOpen ? (
                <div className="drop-down-menue">
                    <div onClick={this.handleDelete}>
                        <img src={trash} className="trash-icon"/>
                        Delete
                    </div>
                    <div onClick={this.handleEdit}>
                        Edit Comment
                    </div>
                </div>
            ) : null 
        )
        
        return (
            <div className="comment-item">
                { userPhoto ? (
                    <img className="comment-avatar" src={userPhoto} />
                ) : (
                    <img className="comment-avatar" src={profilephoto} />
                )}
                
                    
                { this.state.edit && this.state.isOpen ? (
                     <div className="comment-content">
                         <input
                            className="comment-edit-input"
                            type="text"
                            value={this.state.body}
                            onChange={this.handleChange('body')}
                            onKeyPress={this.handleKey}
                        />
                    </div>
                ) : (
                    <div className="comment-content">
                        <div className="commentor-name">
                            <Link to={`/profile/${author.id}`}>{author.name}</Link> 
                        </div>
                        <div className="comment-body">
                            {comment.body}
                        </div>
                    </div>
                )} 
                    
                <div className="edit-comment-btn">
                    {editCommentButton()}
                    {commentDropDown()}
                </div>
            </div>
        )
    }
        
}

export default connect(mSTP, dSTP)(CommentItem);