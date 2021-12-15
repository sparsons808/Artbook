import React from "react";
import DropDownMenu from "./dropdown_menu";

class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }

    toggleDropDown () {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }


    render() {
        const dropDownMenu = () => (
            this.state.isOpen ? ( 
                <DropDownMenu 
                    postId={this.props.postId} 
                    toggleDropDown={this.toggleDropDown}
                    popUpModal={this.props.popUpModal}
                    deletePost={this.props.deletePost}
                /> ) : null
        )
        return (
            <div>
                <div className="post-edit-dropdown" onClick={this.toggleDropDown}>
                    <img src={dropdown} />
                    {dropDownMenu()}
                </div>
            </div>
        )
    }
}

export default DropDown;