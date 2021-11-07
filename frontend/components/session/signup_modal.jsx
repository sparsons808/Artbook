import React from "react";

class SignUpModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) { 
        return(e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.closeModal()
        this.props.action(this.state)
            // .then(this.props.closeModal());

    }

    errors() {
        return(
            <ul>
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
        const { name, email, password } = this.state

        return(
            <div className="signup-form">
                <form onSubmit={this.handleSubmit}>
                    {this.errors()}
                    <input 
                        type="text"
                        onChange={this.handleChange('name')}
                        value={name}
                        placeholder="Name"
                    />
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
                        placeholder="Password"
                    />
                        
                    <button onClick={this.handleSubmit}>Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUpModal;