// react
import React, { PureComponent, Fragment } from "react";

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as apiActions from '../../actions/api-actions'

// components
import { Tag } from '../../components/Tag/Tag'

// utills
import Utils from "../../utills/Utills/Utills"


class TagCloud extends PureComponent {

    componentDidMount() {
        let { getTags } = this.props.apiActions;

        getTags();
    }
    renderTags() {
        let { tags } = this.props;

        return tags.map((item, i) => {
            
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
            <Fragment>
                {this.renderTags()}
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        tags: state.TagCloud.tags,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud)