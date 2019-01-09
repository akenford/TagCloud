// react
import React, { PureComponent } from "react";

// api 
import Fetch from "../../utills/Fetch/Fetch";

// components
import { PageTypes } from '../PageTypes/PageTypes'
import { Mention } from '../Mention/Mention'

// additional
import { map } from 'lodash';

class TagInfo extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            itemInfo:'',
            isLoaded:false,
        }
    }
    componentDidMount() {
        let decodedAString = decodeURIComponent(window.location.pathname).substr(1);
        let apiCall = new Fetch;

        apiCall.baseApiCall("GET", "http://5c2e44682fffe80014bd6922.mockapi.io/api/tags")
             .then(result => {
                 this.setState({
                     isLoaded:true,
                     itemInfo:result.find(item => item.id === decodedAString)
                 })
             });
    }
    renderPageTypes() {
        let { itemInfo } = this.state;

        return _.map(itemInfo.pageType, (qty, name) => {
            return (
                <PageTypes key={name} name={name} value={qty} />
            )
          });
    }
    renderTopMention() {
        let { itemInfo } = this.state;

        let total = Object.values(itemInfo.sentiment).reduce((sum, currentVal) => sum + currentVal);


        return <Mention name={'Total:'}  value={total}/>
    }
    renderMentions() {
        let { itemInfo } = this.state;

        return _.map(itemInfo.sentiment, (qty, name) => {

            return <Mention key={name} name={name}  value={qty}/>

        });
    }

    render() {
        let { isLoaded, itemInfo } = this.state;

        if(!isLoaded) return <div><h1>Loading....</h1></div>;

    return (
        <div className="tag-info">
            <h1 className="tag-info-caption">{itemInfo.label}</h1>
            <h3>Mentions</h3>
            <div className="mentions-container">
                {this.renderTopMention()}
                {this.renderMentions()}
            </div>
                <h3>Page Types</h3>
            <div className="page-types-container">
                {this.renderPageTypes()}
            </div>
        </div>
    )
    }
};

export default TagInfo;