// react
import React from 'react';

// containers
import Layout from '../../containers/Layout/Layout'

// components
import { Header }  from '../../components/Header/Header'
import AddTag from '../../components/AddTag/AddTag'

export const AddPage = () => {
    return (
        <Layout>
            <Header>
                <h1 style={{margin:'0'}}>Add Tag</h1>
            </Header>
            <AddTag/>
        </Layout>
    )
};