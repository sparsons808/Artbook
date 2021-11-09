import React from "react";
import PostIndextContainer from "./post_index_container";
import CreatePostContainer from "./create_post_form_container";

class Feed extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    render() {
        return(
            <div>
                <CreatePostContainer />
                <PostIndextContainer />
            </div>
        )
    }
};

export default Feed;