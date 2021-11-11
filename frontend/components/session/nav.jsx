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
        // //debugger
        const userId = this.props.currentUser.id
        return (
            <nav>
                <div className="logo">
                    <h1 className='logo'>ArtBook</h1>
                </div>
                <div className="home">
                    <Link to="/feed">Home</Link>
                </div>
                <div className="profile-link-nav">
                    <Link to={`/profile/${userId}`}>{this.props.currentUser.name}</Link>
                </div>
                <div className="logout-dropdown">
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </nav>
    
        )
    }
}

export default Nav;