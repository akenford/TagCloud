// react
import React, { PureComponent, Fragment } from "react";

// router
import { BrowserRouter , Route } from 'react-router-dom'

// styles 
import "./styles/index.scss"

// pages
import HomePage from "./pages/HomePage/HomePage";
import TagPage from "./pages/TagPage/TagPage"


class App extends PureComponent {
    
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/:itemId'  component={TagPage}/>
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
