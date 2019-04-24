// react
import React, { Fragment } from 'react';

// router
import { Link } from 'react-router-dom';

// components
import TagInfo from '../../components/TagInfo/TagInfo'
import { Header } from '../../components/Header/Header'

export const TagPage = () => {
    return (
        <Fragment>
            <Header>
                <Link to={'/'}>Back</Link>
            </Header>
            <TagInfo/>
        </Fragment>
    )
};