// react
import React, { PureComponent, Fragment } from "react";

// containers
import { Layout } from '../../containers/Layout/Layout'

// router
import { Link } from "react-router-dom";

// components
import TagInfo from '../../components/TagInfo/TagInfo'
import { Header } from '../../components/Header/Header'

class TagPage extends PureComponent {
    
    render() {
    return (
        <div>
            <Layout>
                {/* <Header>
                    <Link to={"/"}>{'<='}</Link>
                </Header> */}
                <TagInfo/>
            </Layout>
        </div>
    )}
};

export default TagPage;