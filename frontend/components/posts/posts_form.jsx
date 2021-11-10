import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        } 
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createPost(this.state)
    }

    render() {
        const { body } = this.state
        return(
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={this.handleChange('body')} 
                        value={body}
                        placeholder={`Whats on your mind, ${this.props.currentUser.name} ?`}
                        cols="45" rows="2.5"
                    ></textarea>
                </form>
                <div className="post-btns">
                    <span className="photo-btn" onClick={this.handleSubmit}>
                        <span>
                            <input type="submit" value="add photo" />
                        </span>
                    </span>
                    <span className="submit-post" onClick={this.handleSubmit}>
                        <span>
                            <input type="submit" value="post" />
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}

export default PostForm;