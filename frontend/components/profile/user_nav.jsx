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
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

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
            }

        }
        
        
    }


    handleSubmit(e) {
        // //debugger
        e.preventDefault()
        const formData = new FormData()
        formData.append('user[id]', this.props.user.id)

        if(this.state.profilePhoto) {
            formData.append('user[profile_photo]', this.state.profilePhoto)
        }

        if(this.state.coverPhoto) {
            formData.append('user[cover_photo]', this.state.coverPhoto)
        }

        //debugger
        // this.props.closeModal()
        this.props.updateUser(formData)
    }


    render() {
       //debugger
        if(!this.props.user) return null;

        const { user } = this.props
        const coverPhoto = () => (
            <div className="cover-photo-container">
                {user.coverPhotoUrl ? (
                    <img src={user.coverPhotoUrl} alt="" />
                ) : (
                    <div className="cover-replacement"></div>
                )
                }
            </div>
        );
        const profilePhoto = () => (
            <div className="profile-photo-container"> 
                {user.profilePhotoUrl ? (
                    <img src={user.profilePhotoUrl}/>
                ): (
                    <p>{user.name}</p>
                )
                } 
            </div>
        );

        
        return (
            <div className="edit-nav-container">
        
                {coverPhoto()}
                
                <div className="cover-photo-edit">
                    {/* <label htmlFor="cover"><i className="fas fa-camera"></i></label> */}
                    <input
                        className="file"
                        type="file"
                        id="cover"
                        onChange={this.handleFile('coverPhoto')}
                    />
                    <button onClick={this.handleSubmit}>Save</button>
                </div>  
               
                {profilePhoto()}
                <div className="profile-photo-edit">
                    <input
                        className="file"
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