// react
import React, { Component } from 'react';

// router
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom'

// styles 
import './styles/index.scss'

// pages
import { HomePage } from './pages/HomePage/HomePage';
import { TagPage } from './pages/TagPage/TagPage';
import { AddPage } from './pages/AddPage/AddPage';

// redux
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

// containers
import Layout from './containers/Layout/Layout'
import * as apiActions from "./actions/api-actions";

class App extends Component {

    componentDidMount() {
        let { getTags } = this.props.apiActions;
        getTags();
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/add-tag' component={AddPage}/>
                        <Route exact path='/:tagId' component={TagPage}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        apiActions: bindActionCreators(apiActions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(App)

