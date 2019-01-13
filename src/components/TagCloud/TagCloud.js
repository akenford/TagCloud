// react
import React, { Component } from "react";

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as apiActions from '../../actions/api-actions'

// components
import { Tag } from '../../components/Tag/Tag'

// utills
import Utils from "../../utills/Utills/Utills"


class TagCloud extends Component {

    componentDidMount() {
        let { getTags } = this.props.apiActions;
        getTags();
    }
    renderTags() {
        let { filteredTags, tags } = this.props.TagCloud;

        return filteredTags.map((item, i) => {
            
            return (
                    <Tag 
                        key={i}
                        fontSize={Utils.fontCalculation(tags, item.sentimentScore)}
                        data={item}  
                        routeTo={item.id} 
                        name={item.label}
                    />
            ) 
        })
    }

    render() {
        let { isLoaded } = this.props;

         if(!isLoaded) return <div><h1>Loading....</h1></div>;
    
        return (
            <div className="tag-cloud">
                {this.renderTags()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        TagCloud: state.TagCloud,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud)