// react
import React from "react";

// router
import { Link } from "react-router-dom";

export const Tag = ({ routeTo, name, fontSize, editMode, removeTagById}) => {
    return (
        <div className={editMode ? 'tag-animated' : 'tag'}>
            <Link
                onClick={(e) => {
                    e.preventDefault();
                    removeTagById(routeTo)
                }}
                style={{fontSize}}
                to={`/${routeTo}`}>
                {name}
            </Link>
            <span>x</span>
        </div>
    )
};