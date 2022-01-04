import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";

class LogInForm extends React.Component {
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
        // //
        this.props.action(this.props.demo)
    }

    errors() {
        return(
            <ul className="errors">
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        
        const formType = this.props.formType
        const { email, password } = this.state
            
        return(
            <div className="login-container">
                <div className="left-side">
                    <h1>artbook</h1>
                    <p>Where Artists Meet!</p>
                </div>
                
                <div className="login-form">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            {this.errors()}
                            <input 
                                type="text"
                                onChange={this.handleChange('email')}
                                value={email}
                                placeholder="Email"
                            />
                            <input 
                                type="password"
                                onChange={this.handleChange('password')}
                                value={password}
                                placeholder="password"
                            /> 
                        </form>
                        <div className="login-btn">
                            <button onClick={this.handleSubmit}>Log In</button>
                        </div>
                        <div className="demo-user">
                            <div onClick={this.demo}>Demo Sign In</div>
                        </div>
                        
                        <button 
                            className="signup-link"
                            onClick={() => this.props.popUpModal()}
                        >Create An Account</button>
                    </div>
                </div>
                <Modal />
            </div>
        )
    }
};


export default LogInForm;