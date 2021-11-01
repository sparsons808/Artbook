import React from "react";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
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

    render() {
        // debugger
        const formType = this.props.formType
        const { name, email, password } = this.state
        // debugger

        if(formType === 'Sign Up') {
            return (
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
            )
        } else {
            return (

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
            )
        }
    }
};


export default SignUpForm;