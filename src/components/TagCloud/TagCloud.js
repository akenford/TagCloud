// react
import React, { Component } from 'react';

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as apiActions from '../../actions/api-actions'
import * as tagCloudActions from '../../actions/tag-cloud-actions'

// components
import { Tag } from '../../components/Tag/Tag'

// utills
import Utils from '../../utills/Utills/Utills'


class TagCloud extends Component {

    removeTagById(event, id) {
         let { updateTags, filterTagByValue } = this.props.tagCloudActions;
         let { tags } = this.props.TagCloud;
         let { value } = this.props.SearchBar;
         let filteredItems = tags.filter(item => item.id !== id);

         event.preventDefault();
         updateTags(filteredItems);

         filterTagByValue(Utils.filterArray(filteredItems, value));
    }
    renderTags() {
        let { filteredTags, tags, removeMode } = this.props.TagCloud;

        return filteredTags.map((item, i) => {
            return (
                    <Tag 
                        key={i}
                        fontSize={Utils.fontCalculation(tags, item.sentimentScore)}
                        data={item}
                        removeTagById={this.removeTagById.bind(this)}
                        removeMode={removeMode}
                        routeTo={item.id} 
                        name={item.label}
                    />
            ) 
        })
    }
    renderNoResults() {
        return <div><h1>Nothing found...</h1></div>
    }
    render() {
        let { isLoaded } = this.props.isLoaded;
        let { filteredTags } = this.props.TagCloud;

         if(!isLoaded) return <div><h1>Loading....</h1></div>;
    
        return (
            <div className='tag-cloud'>
                {filteredTags.length ? this.renderTags() : this.renderNoResults()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        TagCloud: state.TagCloud,
        SearchBar: state.SearchBar,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
        tagCloudActions: bindActionCreators(tagCloudActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud)