// react
import React from "react";

// router
import { Link } from "react-router-dom";

export const Tag = ({ routeTo, name, fontSize}) => {
    return (
        <div className="tag">
            <Link style={{fontSize}} to={`/${routeTo}`}>{name}</Link>
        </div>
    )
};