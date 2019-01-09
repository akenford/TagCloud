// react
import React, { PureComponent } from "react";
import { CSSTransition } from 'react-transition-group';

class Layout extends PureComponent {
    
    render() {
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="fade">

       <div className="layout">
            {this.props.children}
        </div>
    
    </CSSTransition>
        
    )
    }
};

export default Layout;