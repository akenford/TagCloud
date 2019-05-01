// react
import React, { Component } from 'react';

// components
import { PageTypes } from '../PageTypes/PageTypes'
import { Mention } from '../Mention/Mention'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// actions
import * as apiActions from '../../actions/api-actions'

// lodash
import { map } from 'lodash';

class TagInfo extends Component {
   
    componentDidMount() {
        let { getTagById } = this.props.apiActions;
        let decodedAString = decodeURIComponent(window.location.pathname).substr(1);
        getTagById(decodedAString);
    }
    renderTopMention() {
        let { tag } = this.props.Tag;
        let sum = 0;

        _.map(tag.sentiment, (qty) => sum += qty);

          return <Mention name={'Total:'}  value={sum}/>
    }
    renderMentions() {
        let { tag } = this.props.Tag;

        return _.map(tag.sentiment, (qty, name) => {

            return <Mention key={name} name={name}  value={qty}/>

        });
    }
    renderPageTypes() {
        let { tag } = this.props.Tag;

        return _.map(tag.pageType, (qty, name) => {
           
            return <PageTypes key={name} name={name} value={qty} />
            
          });
    }
    render() {
        let { isLoaded } = this.props.isLoaded;
        let { tag } = this.props.Tag;

        if(!isLoaded) return <div><h1>Loading....</h1></div>;

    return (
        <div className='tag-info'>
             <h1 className='tag-info-caption'>{tag.label}</h1>
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
};

function mapStateToProps(state) {
    return {
        Tag: state.TagInfo,
        isLoaded: state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagInfo)