// react
import React from "react";

export const Mention = ({ name = 'no-name', value = 0 }) => {
    return (
            <div className="mention">
                <div className="caption">{name}</div>
                <div className="value">{value}</div>
            </div>
    )
};