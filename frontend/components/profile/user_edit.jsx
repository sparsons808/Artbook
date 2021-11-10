import React from "react";

class UserEdit extends React.Component {
    constructor(props) {
        super(props)
        // //debugger
        this.state = {
            id: this.props.user.id,
            name: this.props.user.name,
            email: this.props.user.email,
            work: this.props.user.work,
            location: this.props.user.location,
            bio: this.props.user.bio
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(type) {
        
        return (e) => (
            this.setState({ [type]: e.currentTarget.value })
        )
    }

    handleSubmit(e) {
        e.preventDefault()
        //debugger
        this.props.userUpdate(this.state)
    };

    render() {
        const { name, email, location, work, bio } = this.state

        return(
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
}

export default UserEdit;