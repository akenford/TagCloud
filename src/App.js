// react
import React, { Component, Fragment } from "react";
// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// router
import { BrowserRouter , Route } from 'react-router-dom'

// actions
import * as apiActions from './actions/api-actions'

// styles 
import "./styles/index.scss"

// pages
import HomePage from "./pages/HomePage/HomePage";
import TagPage from "./pages/TagPage/TagPage"

class App extends Component {

    componentDidMount() {
        let { getTags } = this.props.apiActions;
        getTags();
    }
    
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/:itemId'  component={TagPage}/>
                </Fragment>
            </BrowserRouter>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(App)

