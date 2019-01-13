// react
import React from "react";
import { CSSTransition } from 'react-transition-group';

export const Layout = ({ children }) => {
    return (
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <div className="layout">
                {children}
            </div>
        </CSSTransition>
    )
};