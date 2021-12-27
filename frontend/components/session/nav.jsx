import React from "react";
import { Link, Redirect } from "react-router-dom";


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    render() {
        // //
        const userId = this.props.currentUser.id
        return (
            <nav>
                <div className="logo">
                    <img src={logo} alt="www.flaticon.com/authors/hight-quality-icons" />
                </div>
                <div className="home">
                    <Link to="/feed">
                        <div className="home-icon-container">
                            <img 
                                className="home-icon"
                                src={home} 
                                alt="Credit: www.flaticon.com/authors/dave-gandy" 
                            />
                        </div>
                    </Link>
                </div>
                <div className="profile-link-nav">
                    <Link className="profile-nav" to={`/profile/${userId}`}>
                        <div className="nav-img-container">
                            { this.props.currentUser.profilePhotoUrl ? (
                                <img className="nav-img" src={this.props.currentUser.profilePhotoUrl} />
                            ) : (
                                <img className="nav-img" src={profilephoto} />
                            )}
                        </div>
                        <div className="current-user-name">
                            {this.props.currentUser.name}
                        </div>
                    </Link>
                </div>
                <div className="logout-dropdown">
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </nav>
    
        )
    }
}

export default Nav;