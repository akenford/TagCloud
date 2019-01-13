// react
import React, { PureComponent, Fragment } from "react";

// containers
import { Layout } from '../../containers/Layout/Layout'

// components
import TagInfo from '../../components/TagInfo/TagInfo'

class TagPage extends PureComponent {
    
    render() {
    return (
        <Fragment>
            <Layout>
                <TagInfo/>
            </Layout>
        </Fragment>
    )}
};

export default TagPage;