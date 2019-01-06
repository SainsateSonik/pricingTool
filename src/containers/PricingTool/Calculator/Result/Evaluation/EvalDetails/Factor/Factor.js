import React from 'react'

const factor = props => {
    return (
        <div className="eval-factor">
            <p>{props.type}</p>
            <span>{props.value}</span>
        </div>
    );
};

export default factor;
