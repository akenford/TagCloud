// react
import React from "react";

// router
import { Link } from "react-router-dom";

export const Tag = ({ routeTo, name, fontSize, removeMode, removeTagById}) => {
    return (
        <div className={removeMode ? 'tag-animated' : 'tag'}>
            <Link
                onClick={removeMode ? e => removeTagById(e, routeTo) : null}
                style={{fontSize}}
                to={`/${routeTo}`}>
                {name}
            </Link>
            <span>x</span>
        </div>
    )
};