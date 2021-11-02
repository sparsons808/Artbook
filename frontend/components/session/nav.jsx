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
            .then(() => this.props.history.push('/'));
    }

    render() {

        return (
            <header>
                <h1 className='logo'>ArtBook</h1>
                <div className="logout">
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            </header>
    
        )
    }
}

export default Nav;