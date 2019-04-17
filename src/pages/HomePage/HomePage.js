// react
import React from 'react';

// containers
import { Layout } from '../../containers/Layout/Layout'

// components
import { Header }  from '../../components/Header/Header'
import TagCloud from '../../components/TagCloud/TagCloud'
import SearchBar from '../../components/SearchBar/SearchBar'
import AddTag from '../../components/AddTag/AddTag'
import RemoveTag from '../../components/RemoveTag/RemoveTag'

export const HomePage = () => {
    return (
        <Layout>
            <Header>
                <SearchBar/>
            </Header>
            <RemoveTag/>
            <AddTag/>
            <TagCloud/>
        </Layout>
    )
};