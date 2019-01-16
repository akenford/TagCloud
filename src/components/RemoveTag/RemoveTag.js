// react
import React, { Component } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'

//compoinents
import InputCheckbox from '../system-components/InputCheckbox/InputCheckbox'


class RemoveTag extends Component {

    render() {
        let { removeMode } = this.props.tagCloudActions;
        let { editMode } = this.props.TagCloud;
        return (
            <div className="remove-tag-container">
                <InputCheckbox handleRemoveMode={removeMode} editMode={editMode}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag)