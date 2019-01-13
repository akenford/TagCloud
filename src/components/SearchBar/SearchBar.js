// react
import React, { Component } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'

// components
import Input from '../system-components/Input/Input'


class SearchBar extends Component {
    
    handleChange(inputValue) {
        let { filterTagByValue } = this.props.tagCloudActions;
        let { tags } = this.props.TagCloud;
        let filteredArray = tags.slice(0);

        filteredArray = filteredArray.filter((item) => {
            return item.label.toLowerCase().search(
                inputValue.toLowerCase()) !== -1;
            });

        filterTagByValue(filteredArray);
    };

    render() {
        return (
            <form className="search-bar">
                <Input
                    inputClass="search-bar--search"
                    inputType="text"
                    inputPlaceholder="Search tags"
                    inputOnChange={this.handleChange.bind(this)}/>
            </form>
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
        tagCloudActions: bindActionCreators(tagCloudActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)