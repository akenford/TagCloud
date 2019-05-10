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

    handleChange = (name, val) => {
        let { filterTagByValue } = this.props.tagCloudActions;
        let { setSearchBarValue } = this.props.searchBarActions;
        let { tags } = this.props.TagCloud;

        setSearchBarValue(val);
        filterTagByValue(Utils.filterArray(tags, val));
    };

    render() {
        return (
            <form className={'search-bar'}>
                <Input
                    isNeedShowRemoveIcon={true}
                    autoFocus={true}
                    inputClass='search-bar--search'
                    required={false}
                    inputType='text'
                    inputName='search-bar'
                    inputValue={this.props.SearchBar.value}
                    inputPlaceholder='Search'
                    inputOnChange={this.handleChange}/>
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