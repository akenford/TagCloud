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

// containers
import Layout from './containers/Layout/Layout'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        {/*<Route path='/:tagId'  component={TagPage}/>*/}
                        <Route path='/add-tag'  component={AddPage}/>
                    </Switch>
                </Layout>
            </Router>
        );
    }
};

