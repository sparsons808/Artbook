import React from "react";
import PostIndextContainer from "./post_index_container";
import NavContainer from "../session/nav_container";

class Feed extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    render() {
        return(
            <div className="feed-page">
                <NavContainer />
                <div className="feed-container">
                    <PostIndextContainer />
                </div>
            </div>
        )
    }
};

export default Feed;