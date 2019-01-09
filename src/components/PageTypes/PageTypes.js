// react
import React, { Fragment } from "react";

export const PageTypes = ({ name = 'no-name', value = 0 }) => {
    return (
        <Fragment>
        <div className="page-type">
            <div className="page-type-item">
                <span className="value">{value}</span>
                <span className="name">{name}</span>
            </div>
        </div>
        </Fragment>
    )
};