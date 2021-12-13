import React from "react";

class Feed extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    render() {
        return null
    }
}

export default Feed;