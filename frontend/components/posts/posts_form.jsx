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
        // this.props.createPost(this.state)
    }

    render() {
        if( !this.props.post ) return null

        
        const body = this.state.body

        const form = this.props.formType === 'Create' ? (
            <div className="post-form-modal">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={this.handleChange('body')} 
                        value={body}
                        placeholder={`Whats on your mind?`}
                        cols="55" rows="10"
                    ></textarea>
                </form>
                <div className="post-btns">
                    <span className="photo-btn" onClick={this.handleSubmit}>
                        <span>
                            <input type="submit" value="add photo" />
                        </span>
                    </span>
                    <span className="submit-post" onClick={this.handleSubmit}>
                        <span onClick={() => this.props.closeModal()}>
                            <input type="submit" value="post" />
                        </span>
                    </span>
                </div>
            </div>
        ) : (
            <div className="post-form-modal">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        onChange={this.handleChange('body')} 
                        value={body}
                        placeholder={`Whats on your mind?`}
                        cols="55" rows="10"
                    ></textarea>
                </form>
                <div className="post-btns">
                    <span className="photo-btn" onClick={this.handleSubmit}>
                        <span>
                            <input type="submit" value="add photo" />
                        </span>
                    </span>
                    <span className="submit-post" onClick={this.handleSubmit}>
                        <span onClick={() => this.props.closeModal()}>
                            <input type="submit" value="post" />
                        </span>
                    </span>
                </div>
            </div>
        )
        return(
            <div>
                {form}
            </div>
        )
    }
}

export default PostForm;