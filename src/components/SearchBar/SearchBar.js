// react
import React, { PureComponent } from "react"

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import * as tagCloudActions from '../../actions/tag-cloud-actions'


class SearchBar extends PureComponent {
    constructor() {
        super();
        this.state = {
            value:''
        }
    }

    handleChange(e) {
        let { filterTagByValue } = this.props.tagCloudActions;
        let { tags } = this.props.TagCloud;
        let filteredArray = tags.slice(0);

        filteredArray = filteredArray.filter((item) => {
            return item.label.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
            });

        filterTagByValue(filteredArray);

        this.setState({
            value:e.target.value
        })
    };

    render() {
        return (
            <form className="search-bar">
                <input
                    className="search-bar--search"
                    type="text"
                    placeholder="Search tags"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.value}/>
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