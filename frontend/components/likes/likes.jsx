import React from "react";

class Likes extends React.Component {
    constructor(props) {
        super(props)

        this.state = { likes: this.props.likes }
    }
    render() {
        return (
            <div>
                <div>
                    
                </div>
                <div>
                    {this.state.likes.length}
                </div>
            </div>
        )
    }
}

export default Likes;