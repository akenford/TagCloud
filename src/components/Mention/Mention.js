// react
import React, { Fragment } from "react";

export const Mention = ({ name = 'no-name', value = 0 }) => {
    return (
        <Fragment>
            <div className="mention">
                <div className="caption">{name}</div>
                <div className="value">{value}</div>
            </div>
        </Fragment>
    )
};