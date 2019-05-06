// react
import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

export default class Layout extends Component {

    render() {
        let { children } = this.props;
        return (
            <CSSTransition in={true} appear={true} timeout={700} classNames="fade">
                <div className="layout">
                    {children}
                </div>
            </CSSTransition>
        )
    }
}