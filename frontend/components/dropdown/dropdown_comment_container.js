import { connect } from "react-redux";
import DropDown from "./dropdown";

const mSTP = (state, ownProps) => ({
    id: ownProps.commentId,
    type: 'Comment'
})

export default connect(mSTP, null)(DropDown);