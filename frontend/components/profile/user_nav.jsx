import React from "react";
import { NavLink } from "react-router-dom";

class UserNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profilePhoto: null,
            coverPhoto: null,
            profilePhotoUrl: null,
            coverPhotoUrl: null,
            isOpen: false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSave = this.toggleSave.bind(this);
        this.cancel = this.cancel.bind(this)
    }


    handleFile(type) {
        let url;

        if(type === 'profilePhoto') {
            url = 'profilePhotoUrl'
        } else {
            url = 'coverPhotoUrl'
        }
        return (e) => {
            const file = e.currentTarget.files[0]
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                this.setState({ [type]:  file, [url]: fileReader.result })

            }
            if(file) {
                fileReader.readAsDataURL(file);
                this.toggleSave()
            }

        }
        
        
    }

    toggleSave(e) {
        e.preventDefault()
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    cancel(e) {
        e.preventDefault()
        this.setState({ coverPhotoUrl: null, profilePhotoUrl: null })
        this.toggleSave()
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', this.props.user.id)

        if(this.state.profilePhoto) {
            formData.append('user[profile_photo]', this.state.profilePhoto)
        }

        if(this.state.coverPhoto) {
            formData.append('user[cover_photo]', this.state.coverPhoto)
        }

        this.props.updateUser(formData).then(this.toggleSave())
    }


    render() {
       
        if(!this.props.user) return null;

        const { user } = this.props
        const coverPhoto = () => (
            <div className="cover-photo-container">
                {user.coverPhotoUrl ? (
                    <img src={user.coverPhotoUrl} alt="" />
                ) : (
                    <img src={coverphoto} />
                )
                }
            </div>
        );
        const profilePhoto = () => (
            <div className="profile-photo-container"> 
                {user.profilePhotoUrl ? (
                    <img src={user.profilePhotoUrl}/>
                ): (
                    <img src={profilephoto} />
                )
                } 
            </div>
        );

        
        return (
            <div className="edit-nav-container">
        
                {coverPhoto()}
                
                <div className="cover-photo-edit">
                    <label className="camera-icon-label" htmlFor="cover">
                        <img 
                            className="camera-icon"
                            src={camera} 
                            alt="Credit: www.flaticon.com/authors/kiranshastry" 
                        />
                    </label>
                    <span className="camera-cover">Edit Cover Photo</span>
                    <input
                        className="file"
                        type="file"
                        id="cover"
                        onChange={this.handleFile('coverPhoto')}
                    />
                </div>
                { this.state.isOpen ? (
                    <div className="save-cancle">
                        <div onClick={this.handleSubmit}>Save</div>
                        <div onClick={this.cancel}>Cancle</div>
                    </div>
                ) : null }
                
                {profilePhoto()}
                <div className="profile-photo-edit">
                    <label className="camera-icon-label" htmlFor="profile">
                        <img 
                            className="camera-icon"
                            src={camera} 
                            alt="Credit: www.flaticon.com/authors/kiranshastry" 
                        />
                    </label>
                    <input
                        className="file"
                        id="profile"
                        type="file"
                        onChange={this.handleFile('profilePhoto')}
                    />
                    <button onClick={this.handleSubmit}>Save</button>
                </div>

                <div className="username">
                    <span>
                        {user.name}
                    </span>
                </div>

                <div className="profile-nav">
                    <div>
                        <NavLink exact to={`/profile/${user.id}/posts`}>Posts</NavLink>
                    </div>
                    <div>
                        <NavLink exact to={`/profile/${user.id}/about`}>About</NavLink>
                    </div>
                    <div>
                        <NavLink exact to={`/profile/${user.id}/friends`}>Friends</NavLink>
                    </div>
                </div>
                
            </div>
        )
    }
};


export default UserNav;