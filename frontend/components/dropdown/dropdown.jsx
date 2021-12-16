import React from "react";
import DropDownMenuContainer from "./dropdown_menu";

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
        const dropDownMenu = this.state.isOpen ? ( 
                <DropDownMenuContainer 
                    postId={this.props.postId} 
                    toggleDropDown={this.toggleDropDown}
                /> ) : null
        
        return (
            <div>
                <div className="post-edit-dropdown" onClick={this.toggleDropDown}>
                    <img src={drop} />
                    {dropDownMenu}
                </div>
            </div>
        )
    }
}

export default DropDown;