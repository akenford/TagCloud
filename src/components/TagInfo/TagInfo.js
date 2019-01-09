// react
import React, { PureComponent, Fragment } from "react";

// api 
import Fetch from "../../utills/Fetch/Fetch";

// components
import { PageTypes } from '../PageTypes/PageTypes'

// additional
import { map } from 'lodash';

class TagInfo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            itemInfo:'',
            isLoaded:false,
        }
    }
    componentDidMount() {
        let decodedAString = decodeURIComponent(window.location.pathname).substr(1)
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

        return _.map(itemInfo.pageType, (name, qty) => {
            return (
                <PageTypes key={qty} name={name} value={qty} />
            )
          });
    }

    render() {
        let { isLoaded, itemInfo } = this.state;

        if(!isLoaded) return <div><h1>Loading....</h1></div>

    return (
        <Fragment>
            <h1>{itemInfo.label}</h1>
            <div className="page-types-container">
                {this.renderPageTypes()}
            </div>
        </Fragment>
    )
    }
};

export default TagInfo;