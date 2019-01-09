// react
import React, { PureComponent } from "react";

class Layout extends PureComponent {
    
    render() {
    return (
        <div className="layout">
            {this.props.children}
        </div>
    )
    }
};

export default Layout;