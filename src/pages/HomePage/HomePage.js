// react
import React, { PureComponent, Fragment } from "react";

// containers
import Layout from '../../containers/Layout/Layout'

// components
import { Header }  from '../../components/Header/Header'
import TagCloud from '../../components/TagCloud/TagCloud'

class HomePage extends PureComponent {
    
    render() {
    return (
        <Fragment>
            <Header/>
            <Layout>
                <TagCloud/>
            </Layout>
        </Fragment>
    )}
};

export default HomePage;