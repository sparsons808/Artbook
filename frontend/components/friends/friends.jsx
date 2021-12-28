import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Friend from "./friend";

const mSTP = (state, ownProps) => ({
    friends: ownProps.friends
})

class Friends extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { friends } = this.props

        const friend = Object.values(friends).map( friend => {
            return (
                <Friend
                    key={friend.id + 2}
                    friend={friend}
                />
            )
        })

        return (
            <div className="friend-icon">
                {friend}
            </div>
        )
    }
}

export default connect(mSTP, null)(Friends);