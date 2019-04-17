// react
import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'
import * as searchBarActions from '../../actions/search-bar-actions'

// components
import Input from '../system-components/Input/Input'

// utills
import Utils from '../../utills/Utills/Utills'


class SearchBar extends Component {

    handleChange(inputValue) {
        let { filterTagByValue } = this.props.tagCloudActions;
        let { setSearchBarValue } = this.props.searchBarActions;
        let { tags } = this.props.TagCloud;

        setSearchBarValue(inputValue);
        filterTagByValue(Utils.filterArray(tags, inputValue));
    };

    render() {
        return (
            <form className='search-bar'>
                <Input
                    inputClass='search-bar--search'
                    inputType='text'
                    inputValue={this.props.SearchBar.value}
                    inputPlaceholder='Search tags'
                    inputOnChange={this.handleChange.bind(this)}/>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        TagCloud: state.TagCloud,
        SearchBar: state.SearchBar
    }
}
function mapDispatchToProps(dispatch) {
    return {
        tagCloudActions: bindActionCreators(tagCloudActions, dispatch),
        searchBarActions: bindActionCreators(searchBarActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)