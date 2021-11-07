import React from "react";

class UserEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

    handleChange(type) {
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.updateUser(this.state)
    }

    render() {
        
        if(!this.props.user) return null;

        const { name, email, location, work, bio } = this.state
        return (
            <div className="edit-form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange("name")}
                        value={name}
                        placeholder="Name"
                    />
                    <input 
                        type="text"
                        onChange={this.handleChange("email")}
                        value={email}
                        placeholder="Email"
                    />
                    <input 
                        type="text"
                        onChange={this.handleChange("work")}
                        value={work}
                        placeholder="Work Place"
                    />
                    <input 
                        type="text"
                        onChange={this.handleChange("location")}
                        value={location}
                        placeholder="Home Town"
                    />
                    <textarea 
                        cols="30" rows="5" 
                        onChange={this.handleChange("bio")}
                        value={bio}
                        placeholder="Bio"
                    />
                </form>
                <button onClick={this.handleSubmit}>Save</button>
            </div>
        )
    }
};


export default UserEditForm;