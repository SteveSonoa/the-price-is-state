import React from 'react';

const Total = props => {
    return(
        <div className="total" style={{color: props.color}}>{props.total}</div>
    );
};

export default Total;
