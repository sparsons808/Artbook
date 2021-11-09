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
                        cols="30" rows="10"
                    ></textarea>
                </form>
                <button onClick={this.handleSubmit}>post</button>
            </div>
        )
    }
}

export default PostForm;