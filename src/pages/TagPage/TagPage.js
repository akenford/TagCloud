// react
import React from 'react';

// containers
import { Layout } from '../../containers/Layout/Layout'

// router
import { Link } from 'react-router-dom';

// components
import TagInfo from '../../components/TagInfo/TagInfo'
import { Header } from '../../components/Header/Header'

export const TagPage = () => {
    return (
        <Layout>
            <Header>
                <Link to={'/'}>{'Move Back'}</Link>
            </Header>
            <TagInfo/>
        </Layout>
    )
};