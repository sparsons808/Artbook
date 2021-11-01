import React from "react";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handChange(type) { 
        return(e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    render() {
        const formType = this.props.formType
        const { name, email, age, password } = this.state

        if(formType === 'Sign Up') {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input 
                            type="text"
                            onChange={this.handChange('name')}
                            value={name}
                        />
                    </label>
                    <label>Email:
                        <input 
                            type="text"
                            onChange={this.handChange('email')}
                            value={email}
                        />
                    </label>
                    <label>Age:
                        <input 
                            type="text"
                            onChange={this.handChange('age')}
                            value={age}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            onChange={this.handChange('password')}
                            value={password}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
            )
        }
    }
};


export default SignUpForm;