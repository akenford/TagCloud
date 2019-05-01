// react
import React from 'react';

// containers
import Layout from '../../containers/Layout/Layout'

// components
import { Header }  from '../../components/Header/Header'
import Input from '../../components/system-components/Input/Input'

export const AddPage = () => {
    return (
        <Layout>
            <Header/>
            <h1>Hello from App Page</h1>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Input
                        inputClass='hello'
                        inputType='text'
                        inputPlaceholder='Label'
                        inputValue=''
                    />
                    <Input
                        inputClass='hello'
                        inputType='text'
                        inputPlaceholder='Volume'
                        inputValue=''
                    />
                    <button type='submit'>Add</button>
                </form>
            </div>
        </Layout>
    )
};