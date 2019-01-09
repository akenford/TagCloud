// react
import React, { PureComponent, Fragment } from "react";

// components
import Tag from '../../components/Tag/Tag'

// api 
import Fetch from "../../utills/Fetch/Fetch";

class TagCloud extends PureComponent {
    constructor() {
        super();
        this.state = {
            isLoaded:false,
            dataFromApi:[]
        }
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

        return dataFromApi.map((item, i) => {
            return (
                <Tag data={item} key={i} routeTo={item.id} name={item.label}/>
            ) 
        })
    }

    render() {
        let { isLoaded } = this.state;

        if(!isLoaded) return <div><h1>Loading....</h1></div>
    
        return (
            <Fragment>
                {this.renderTags()}
            </Fragment>
        );
    }
}

export default TagCloud;