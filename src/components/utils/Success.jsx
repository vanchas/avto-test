import React from 'react';
import {connect} from "react-redux";

function Success({success}) {
    return (
        success && <div>{success}</div>
    );
}

const mapStateToProps = state => ({
    success: state.app.success
})
export default connect(mapStateToProps, null)(Success);