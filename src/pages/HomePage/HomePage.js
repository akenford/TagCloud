// react
import React, { PureComponent, Fragment } from "react";

// containers
import { Layout } from '../../containers/Layout/Layout'

// components
import { Header }  from '../../components/Header/Header'
import TagCloud from '../../components/TagCloud/TagCloud'
import SearchBar from '../../components/SearchBar/SearchBar'

class HomePage extends PureComponent {
    
    render() {
    return (
        <Fragment>
            <Layout>
                <Header>
                    <SearchBar/>
                </Header>
                <TagCloud/>
            </Layout>
        </Fragment>
    )}
};

export default HomePage;