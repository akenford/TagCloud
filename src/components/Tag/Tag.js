import React, { PureComponent } from "react";

// router
import { Link } from "react-router-dom";

export const Tag = (props) => {

    let { routeTo, name, fontSize} = props;

    return (
        <div className="tag">
            <Link style={{fontSize:`${fontSize}px`}} to={`/${routeTo}`}>{name}</Link>
        </div>
    )
};