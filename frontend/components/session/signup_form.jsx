import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demo = this.demo.bind(this);
    }

    handleChange(type) { 
        return(e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)

    }

    demo(e) {
        e.preventDefault()
        // debugger
        this.props.action(this.props.demo)
    }

    render() {
        // debugger
        const formType = this.props.formType
        const { name, email, password } = this.state
        // debugger
        const form = formType === 'Sign Up' ? (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
                    <label>Name:
                        <input 
                            type="text"
                            onChange={this.handleChange('name')}
                            value={name}
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="text"
                            onChange={this.handleChange('email')}
                            value={email}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            onChange={this.handleChange('password')}
                            value={password}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
                <Link to="/login">Login</Link>
            </div>
        ) : (
            <div>
                <h1>ArtBook</h1>
                <p>Where Artists Meet!</p>
                <button onClick={this.demo}>Demo Sign In</button>
                <div></div>
                <p>or</p>
                <div></div>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input 
                            type="text"
                            onChange={this.handleChange('email')}
                            value={email}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            onChange={this.handleChange('password')}
                            value={password}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
                <p>or</p>
                    <br />
                <Link to="/signup">Sign Up!</Link>
            </div>

        )
            
        return(
            <div className="loginSignup">
                {form}
            </div>
        )
    }
};


export default SignUpForm;