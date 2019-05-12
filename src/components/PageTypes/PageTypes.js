// react
import React from "react";

export const PageTypes = ({ name = 'no-name', value = 0 }) => {
    return (
        <div className="page-type">
            <div className="page-type-item">
                <span className="value">{value}</span>
                <span className="name">{name}</span>
            </div>
        </div>
    )
};