// react
import React, { PureComponent, Fragment } from "react";

// components
import { Tag } from '../../components/Tag/Tag'

// utills
import Fetch from "../../utills/Fetch/Fetch";
import Utils from "../../utills/Utills/Utills"

class TagCloud extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLoaded:false,
            dataFromApi:[]
        };
    }
    componentDidMount() {
        let apiCall = new Fetch;

        apiCall.baseApiCall("GET", "http://5c2e44682fffe80014bd6922.mockapi.io/api/tags")
            .then(result => {
                this.setState({
                    isLoaded:true,
                    dataFromApi:result
                })
            });
    }
    renderTags() {
        let { dataFromApi } = this.state;
        
        let maxSantimentValue = Math.max.apply(Math, dataFromApi.map((o) => { return o.sentimentScore; }))
        let minSantimentValue = Math.min.apply(Math, dataFromApi.map((o) => { return o.sentimentScore; }))

        return dataFromApi.map((item, i) => {
            
            return (
                <Tag 
                    key={i}
                    fontSize={Utils.fontCalculation(item.sentimentScore, maxSantimentValue, minSantimentValue)} 
                    data={item}  
                    routeTo={item.id} 
                    name={item.label}
                />
            ) 
        })
    }

    render() {
        let { isLoaded } = this.state;

        if(!isLoaded) return <div><h1>Loading....</h1></div>;
    
        return (
            <Fragment>
                {this.renderTags()}
            </Fragment>
        );
    }
}

export default TagCloud;