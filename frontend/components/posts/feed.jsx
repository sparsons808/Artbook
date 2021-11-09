import React from "react";
import PostIndextContainer from "./post_index_container";

class Feed extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    render() {
        return(
            <div>
                <PostIndextContainer />
            </div>
        )
    }
};

export default Feed;