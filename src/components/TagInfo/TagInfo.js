// react
import React, { Component } from 'react';

// components
import { PageTypes } from '../PageTypes/PageTypes'
import { Mention } from '../Mention/Mention'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as tagInfoActions from '../../actions/tag-info-actions'

class TagInfo extends Component {
   
    componentDidMount() {
        let { getTagById } = this.props.tagInfoActions;
        let decodedAString = decodeURIComponent(window.location.pathname).substr(1);

        getTagById(decodedAString);
    }

    renderTopMention() {
        let { tagInfo } = this.props.TagInfo;

        return <Mention name={'Total:'}  value={tagInfo.getTopMention}/>
    }

    renderMentions() {
        let { tagInfo } = this.props.TagInfo;

        return _.map(tagInfo.getSentiment, (qty, name) => {

            return <Mention key={name} name={name}  value={qty}/>

        });
    }

    renderPageTypes() {
        let { tagInfo } = this.props.TagInfo;

        return _.map(tagInfo.getPageType, (qty, name) => {
           
            return <PageTypes key={name} name={name} value={qty} />
            
          });
    }

    render() {
        let { isLoaded } = this.props.isLoaded;
        let { tagInfo } = this.props.TagInfo;

        if(!isLoaded) return <div><h1>Loading....</h1></div>;

    return (
        <div className='tag-info'>
             <h1 className='tag-info-caption'>{tagInfo.getLabel}</h1>
            <h3>Mentions</h3>
            <div className='mentions-container'>
                {this.renderTopMention()}
                {this.renderMentions()}
            </div>
                <h3>Page Types</h3>
            <div className='page-types-container'>
                {this.renderPageTypes()}
            </div>
        </div>
    )
    }
}

function mapStateToProps(state) {
    return {
        TagInfo: state.TagInfo,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tagInfoActions: bindActionCreators(tagInfoActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagInfo)