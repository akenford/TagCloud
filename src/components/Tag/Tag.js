import React, { PureComponent } from "react";

// router
import { Link } from "react-router-dom";


class Tag extends PureComponent {

    render() {
      
        let { routeTo, name} = this.props;

        return (
            <div className="tag">
                <Link to={`/${routeTo}`}>{name}</Link>
            </div>
        );
    }
}

export default Tag;