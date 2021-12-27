import React from "react";
import { Link, Redirect } from "react-router-dom";


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.openDropDown = this.openDropDown.bind(this);
        this.state = {
            open: false
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout()
    }

    openDropDown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            open: !prevState.open
        }));
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
                    <div onClick={this.openDropDown} alt="https://roundicons.com/">
                        <img src={logoutdrop} />
                    </div>
                    { this.state ? (
                        <div className="logout-menu">
                            <div onClick={this.handleClick} > 
                                <img src={logout} alt="https://www.flaticon.com/authors/smashicons" />
                                <span>Logout</span>
                            </div>
                        </div>
                        ) : (
                        <div className="no-dropdown"></div>
                    )}
                </div>
            </nav>
    
        )
    }
}

export default Nav;