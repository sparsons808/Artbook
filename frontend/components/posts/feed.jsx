import React from "react";

class Feed extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if(!this.props.posts) return null;
        return(
            <div>Feed goes here</div>
        )
    }
};

export default Feed;