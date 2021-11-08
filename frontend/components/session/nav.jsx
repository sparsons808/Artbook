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
        // debugger
        const userId = this.props.currentUser.id
        return (
            <header>
                <div>
                    <h1 className='logo'>ArtBook</h1>
                </div>
                <div>
                    <Link to={`/profile/${userId}`}>Profile</Link>
                </div>
                <div className="logout">
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </header>
    
        )
    }
}

export default Nav;