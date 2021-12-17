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
                    elementId={this.props.id} 
                    toggleDropDown={this.toggleDropDown}
                    type={this.props.type}
                /> ) : null
        
        return (
            <div>
                <div className="post-edit-dropdown" onClick={this.toggleDropDown}>
                    <img className="drop-image"src={drop} />
                    {dropDownMenu}
                </div>
            </div>
        )
    }
}

export default DropDown;