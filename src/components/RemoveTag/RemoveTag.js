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
        let { switchRemoveMode } = this.props.tagCloudActions;
        let { removeMode } = this.props.TagCloud;

        return (
            <div className="remove-tag-container">
                <InputCheckbox handleRemoveMode={switchRemoveMode} removeMode={removeMode}/>
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