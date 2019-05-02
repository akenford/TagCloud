// react
import React, { Fragment } from 'react';

// components
import { Header }  from '../../components/Header/Header'
import TagCloud from '../../components/TagCloud/TagCloud'
import SearchBar from '../../components/SearchBar/SearchBar'
import RemoveTag from '../../components/RemoveTag/RemoveTag'

export const HomePage = () => {
    return (
        <Fragment>
            <Header>
                <SearchBar/>
            </Header>
            <RemoveTag/>
            <TagCloud/>
        </Fragment>
    )
};