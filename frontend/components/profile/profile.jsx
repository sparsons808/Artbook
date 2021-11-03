import React from "react";

class Profile extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchUsers()
    }
    render() {
        debugger
        if (!this.props.user) return null;
        return (
            <div>
                {/* need to go into jbuilder to make sure that bio and work are editable on user
                give demo user a bio and work place */}
                <div>
                    {this.props.user.name}
                </div>
            </div>
        )
    }
};

export default Profile;