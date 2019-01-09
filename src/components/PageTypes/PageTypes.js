// react
import React, { Fragment } from "react";

export const PageTypes = ({ name = 'no name', value = 0 }) => {
    return (
        <Fragment>
        <div className="page-type">
             <div>{name}</div>
             <div>{value}</div>
        </div>
        </Fragment>
    )
}