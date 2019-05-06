// react
import React, { Fragment } from 'react';

// components
import { Header }  from '../../components/Header/Header'
import TagCloud from '../../components/TagCloud/TagCloud'
import SearchBar from '../../components/SearchBar/SearchBar'
import RemoveTag from '../../components/RemoveTag/RemoveTag'
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <Fragment>
            <Header>
                <SearchBar/>
            </Header>
            <RemoveTag/>
            <Link to={'/add-tag'}>To add</Link>
            <TagCloud/>
        </Fragment>
    )
};