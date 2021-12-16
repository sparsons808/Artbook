import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: this.props.post.body,
            photo: null,
            photoUrl: null,
            profile: this.props.post.profile,
            auther_id: this.props.post.auther_id
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }
    
    handleChange(body) {
        return (e) => {
            this.setState({ [body]: e.currentTarget.value })
        }
    }

    handleFile(e) {
    
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photo: file })
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photo: null })
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[auther_id]', this.state.auther_id)
        formData.append('post[body]', this.state.body)
        if(this.state.profile) {
            formData.append('post[profile]', this.state.profile)
        }

        if(this.state.photo) {
            formData.append('post[photo]', this.state.photo)
        }

        if (this.props.formType === 'Edit') {
            
            this.props.action(formData, this.props.post.id).then(this.props.closeModal());
        } else {
            this.props.action(formData).then(this.props.closeModal());
        }
    }

    render() {
        
        const photoPreview = this.state.photoUrl ? (
            <img className="post-photo-preview" src={this.state.photoUrl} />
        ) : (
            <div></div>
        )

        return (
            <div>
                <div className="post-form-modal">
                    <form onSubmit={this.handleSubmit}>
                        <textarea
                            onChange={this.handleChange('body')}
                            value={this.state.body}
                            placeholder={`What's on your mind ${this.props.currentUser.name}?`}  
                            cols="55" 
                            rows="10"
                        ></textarea>
                        <div className="preview-container">{photoPreview}</div>
                        <div className="upload-container">
                            <label className="upload-photo" htmlFor="file-input">
                                <span className="add-photo">Add Photo</span>
                                <div className="add-photo-input">
                                </div>
                            </label>
                            <input type="file" id="photo-file-input" onChange={this.handleFile} />
                        </div>
                        <button className="post-form-button">
                            {this.props.formType} Post
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PostForm;