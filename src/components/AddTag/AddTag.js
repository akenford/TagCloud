// react
import React, { Component } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'


class AddTag extends Component {

    render() {
        return (
            <div className="add-tag-container" onClick={() => {console.log('add tag')}}>
                <button type="button">Add Tag</button>
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