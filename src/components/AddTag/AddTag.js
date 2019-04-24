// react
import React, { Component } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// router
import { Link } from 'react-router-dom';

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'


class AddTag extends Component {

    render() {
        return (
            <div className="add-tag-container" onClick={() => {console.log(this.props.TagCloud.tags)}}>
                <Link to={'/add-tag'}>Add Tag</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        TagCloud: state.TagCloud
    }
}
function mapDispatchToProps(dispatch) {
    return {
        tagCloudActions: bindActionCreators(tagCloudActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTag)